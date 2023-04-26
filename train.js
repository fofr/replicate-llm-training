import Replicate from 'replicate'
import * as dotenv from 'dotenv'
dotenv.config()

// Trainable large language models on replicate.com
const LLMs = {
  llama: ['llama-7b', '2014ee1247354f2e81c0b3650d71ca715bc1e610189855f134c30ecb841fae21'],
  gpt: ['gpt-j-6b', 'b3546aeec6c9891f0dd9929c2d3bedbf013c12e02e7dd0346af09c37e008c827'],
  flan: ['flan-t5-xl', 'eec2f71c986dfa3b7a5d842d22e1130550f015720966bec48beaae059b19ef4c']
}

// Choose your LLM (llama, gpt, flan)
const [llm, version] = LLMs.flan

// Your Replicate username/model to save the fine tuning to
const destination = ''

// URL to your training data
const training_data_url = ''

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

async function main() {
  const training = await replicate.trainings.create('replicate', llm, version, {
    destination,
    input: {
      train_data: training_data_url
    }
  })
  console.log(`URL: https://replicate.com/p/${training.id}`)
}

main()
