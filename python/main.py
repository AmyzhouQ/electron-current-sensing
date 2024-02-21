import argparse
import uvicorn
from fastapi import FastAPI

app = FastAPI()

# argparse
parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('--port', type=int, default=7074, help='The port number.')
args = parser.parse_args()

@app.get("/")
async def index():
    return {"message": "Hello World"}

@app.get("/hello")
async def hello():
    return {
        "app_name": "FastAPI框架学习",
        "app_version": "v0.0.1"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=args.port)

# 控制台默认关闭输出信息，如果想要查看控制台输出，请单独启动服务 npm run dev-python
print("python server is running at port:", args.port)