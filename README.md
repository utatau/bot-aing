# BOT UTA:V1

## Authors

- [utatau](https://www.github.com/utatau)

## env file

bikin file .env yang isinya

`HOST= "localhost"/"ip public"`

`PORT=12312321 terserah`

## INSTALASI

install bot-gua

```bash
  cd bot-gua
  npm install bot-gua
```

## Run Project Di Lokal

install ollama windows

```bash
  https://ollama.com/download/OllamaSetup.exe
```

install ollama linux

```bash
  linux curl -fsSL https://ollama.com/install.sh | sh
```

install ollama MacOs

```bash
  https://ollama.com/download/Ollama-darwin.zip
```

Clone Project

```bash
  git clone https://github.com/utatau/bot-gua
```

Masuk Ke Direktori Project

```bash
  cd bot-gua
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run uta
```

## Model AI

Check file src/index.js
bagian

```bash
  const response = await axios.post(HOST, {
            model: 'deepseek-r1:1.5b',
            message: [
                {
                    role: "user", content: pertanyaan
                },
            ],
            stream: false
        })
```

sesuai kan model nya dengan ai yang anda download
