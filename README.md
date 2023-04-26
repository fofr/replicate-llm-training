# Fine tune an LLM using Replicate

`train.js` is a script for kicking off a fine-tuning of a large language model [using the Replicate API](https://replicate.com/docs/guides/fine-tune-a-language-model).

You can fine-tune your language model with your own training data and choose from one of the available models: Llama, GPT, and Flan.

You need:

- An account on Replicate
- Your Replicate API token
- A destination model to save your fine tuned model ([Create a model](https://replicate.com/create))
- Training data in a `.jsonl` file, in the format: `{ prompt: "...", completion: "..." }`
- A URL pointing to your generated training data

## Installation

```sh
git clone https://github.com/fofr/replicate-llm-training
cd replicate-llm-training
npm install
```

## Set up

Rename `.env.example` as `.env` and add your Replicate API token.

Open `train.js` and:

1. Set the destination variable to the username and model name you want to save the fine-tuned model to. For example, if your username is `myusername` and you want to save the model as `mymodel`, set destination to 'myusername/mymodel'.

2. Set the `training_data_url` variable to the URL of your training data.

3. Choose the pre-trained model you want to fine-tune. Use one of the following:

```js
const [llm, version] = LLMs.llama // For Llama model
const [llm, version] = LLMs.gpt   // For GPT model
const [llm, version] = LLMs.flan  // For Flan model
```

## Start training

After setting the variables, save the file and run the script with `node train.js`. The script will create a new fine-tuning job using the Replicate API, and it will print the details of the training job, including the URL to track the progress of your fine-tuning.

## Track or cancel training

From the replicate.com dashboard you can:

- see the progress of your training
- view the logs
- cancel the training
