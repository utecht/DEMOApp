from typing import List, Optional

from pydantic import BaseModel


class Update(BaseModel):
    id: int
    statement: str

    class Config:
        orm_mode = True
