from sqlalchemy.orm import Session
from sqlalchemy import func

from . import models, schemas


def get_updates(db: Session, min: int):
    return db.query(models.Update).filter(models.Update.id >= min).all()


def get_latest(db: Session):
    return db.query(func.max(models.Update.id)).scalar()
