#!/usr/bin/env python

from fastapi import FastAPI, HTTPException, Response, Depends
from collections import defaultdict
from pydantic import BaseModel
from typing import List
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def get_home():
    return "This is an api for use with the UAMS app"

@app.get("/status")
def get_status(db: Session = Depends(get_db)):
    update_num = crud.get_latest(db=db)
    return {'latest_version': update_num}


@app.get("/updates")
def get_updates(min: int = 0, db: Session = Depends(get_db)):
    updates = crud.get_updates(db=db, min=min)
    return updates
