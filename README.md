# Atlantec Hackathon 2025 Starting Kit 

This is a simple React-based chat interface that connects to a local Deepseek language model running through ollama on a local machine. This is a starting boilerplate for building AI applications with local LLMs.

## Prequisites 
Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm 
- [Ollama](https://ollama.com/download)

## Installation 

Run these commands using bash / open your terminal. 

### 1. Clone the repository

`git clone https://github.com/MikeLynagh/Atlantec-AI-Challenge.git`

`cd Atlantec-AI-Challenge/hackathon-boilerplate/frontend`

### 2. Install dependencies

run the command 

`npm install`

### 3. Install Ollama 

You have two options here. You can either install Ollama from the official website listed above or use Homebrew. 

To install using Homebrew, run the following command: 

`brew install ollama` 

Once you have installed Ollama, check that it is installed by running 

`ollama --version` 

If you see a version, it was installed successfully. 

To start running ollama, open a new terminal and run:

`ollama serve`


## How to use Ollama

Ollama is a tool that allows you to run local LLMs. To get started, I would recommend downloading a model such as 
deepseek-r1:1.5b, which is a 1.5 billion parameter model that is a language model. It typically takes up about 1.0GB of memory and will run on most local machines. 

Open a new terminal window.

To download the model, run 

`ollama pull deepseek-r1:1.5b`

Once downloaded, you can run the model in your terminal by running 

`ollama run deepseek-r1:1.5b`

The image below shows a sample response from a query through the terminal after you have run the above command. As you can see, the response also shows the 'Thinking' process of the model. 

<img width="708" alt="screenshot ollama" src="https://github.com/user-attachments/assets/2032079e-3400-40d8-bd53-42bf34047542" />

## Running the application 

In a new terminal, go to the hackathon-boilerplate directory and run 

`npm run dev` 

This will start the application. 

Open your browser and navigate to http://localhost:5173. You should see the application running. 

<img width="869" alt="Screenshot 2025-03-28 at 09 41 57" src="https://github.com/user-attachments/assets/0a131e16-4249-4bf5-88e2-93a57388583c" />


## How to use the application 

The application is a simple chat interface that allows you to chat with the local LLM. Simply 
a question through the input form. 

## Can I use other tools or LLMs?

Of course! You are free to use any services that you wish during the hackathon. 

The information here is just a simple guide to act as a starting point if needed. 

There are other tools for running models locally, some of the better-known ones are: 

1. PyTorch
2. TensorFlow
3. ONNX Runtime
4. OpenVINO
5. TensorFlow Lite

If you would like to experiment with other models, 

The following article from freecodecamp name How To Get Started With Hugging Face - Open Source AI Models and Datasets is a good place to start. [Freecodecamp Article](https://www.freecodecamp.org/news/get-started-with-hugging-face/#:~:text=Each%20model%20has%20a%20model,using%20the%20Inference%20API%20section)

You can experiment with other models available on Hugging Face by using the link below. [HuggingFace Models](https://huggingface.co/models)

The reason I would recommend Hugging Face is that the vast collection of models and datasets available are open source and free to interact with. 
