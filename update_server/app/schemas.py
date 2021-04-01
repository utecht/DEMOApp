from typing import List, Optional
import datetime

from pydantic import BaseModel


class Update(BaseModel):
    id: int
    statement: str

    class Config:
        orm_mode = True

class Change(BaseModel):
    wpid: int
    last_update: datetime.datetime

    class Config:
        orm_mode = True
