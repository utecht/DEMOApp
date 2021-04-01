from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from .database import Base


class Update(Base):
    __tablename__ = "updates"

    id = Column(Integer, primary_key=True, index=True)
    statement = Column(String)

class Change(Base):
    __tablename__ = "changes"

    wpid = Column(Integer, primary_key=True, index=True)
    last_update = Column(DateTime)
