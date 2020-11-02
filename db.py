from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "databases/test.db"))
engine = create_engine(database_file)
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base(bind=engine)
