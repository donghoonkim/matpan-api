import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Matpan API</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
          }
          .container {
            background-color: rgba(255, 255, 255, 0.95);
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 500px;
            width: 90%;
            animation: fadeIn 1s ease-out;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #2d3748;
          }
          p {
            font-size: 1.1rem;
            color: #718096;
            margin-bottom: 2rem;
          }
          .btn {
            display: inline-block;
            background-color: #667eea;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
          }
          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
            background-color: #5a67d8;
          }
          .status {
            display: inline-block;
            margin-top: 1.5rem;
            font-size: 0.9rem;
            color: #48bb78;
            font-weight: 600;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Matpan API</h1>
          <p>Welcome to Matpan API Server.<br>The system is running smoothly.</p>
          <a href="/api-docs" class="btn">View API Documentation</a>
          <br>
          <span class="status">● System Operational</span>
        </div>
      </body>
      </html>
    `;
  }
}
