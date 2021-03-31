FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

RUN pip install sqlalchemy

COPY ./server.db /app/server.db
COPY ./app /app/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3000"]
