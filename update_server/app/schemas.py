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

class Attribute(BaseModel):
    id: int
    atype: str
    name: str
    content: Optional[str]

    class Config:
        orm_mode = True

class Provider(BaseModel):
    id: int
    full_name: str
    last_name: Optional[str]
    middle_name: Optional[str]
    title: Optional[str]
    service_line: Optional[str]
    bio: Optional[str]
    short_bio: Optional[str]
    photo: Optional[str]

    class Config:
        orm_mode = True

class ProviderAttribute(BaseModel):
    provider_id: int
    attribute_id: int

    class Config:
        orm_mode = True
