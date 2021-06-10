from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Table
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

class ProviderAttribute(Base):
    __tablename__ = "provider_attributes"

    provider_id = Column(Integer, ForeignKey('providers.id'), primary_key=True)
    attribute_id = Column(Integer, ForeignKey('attributes.id'), primary_key=True)

class Provider(Base):
    __tablename__ = "providers"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    last_name = Column(String)
    middle_name = Column(String)
    title = Column(String)
    service_line = Column(String)
    bio = Column(String)
    short_bio = Column(String)
    photo = Column(String)

class Attribute(Base):
    __tablename__ = "attributes"

    id = Column(Integer, primary_key=True, index=True)
    atype = Column(String)
    name = Column(String)
    content = Column(String)
