<div align="center">
  <img src="./assets/logo.png" />
  <h1>GraveyardShift-MDtoPDF</h1>
</div>

A CLI-tool that helps convert Markdown documents to a PDF format.

## Installation

Assumes NodeJS is installed on your machine.

### Install from source

```bash
git clone https://github.com/Graveyard-Shift/GraveyardShift-MDtoPDF
```

```bash
cd GraveyardShift-MDtoPDF
```

```bash
yarn build
```

```bash
yarn i
or
npm i -g
```

## Usage

```bash
gys-md-pdf <options>
```

### Options

* `-s` or `--src`: The source path of the Markdown file

* `-d` or `--dest`: The destination file of the PDF file

* `-f` or `--format`: The format of the PDF being generated

#### Example

```bash
gys-md-pdf -s ./doc.md -d ./doc.pdf -f A4
```

Running the `gys-md-pdf` command will convert the entered Markdown and generate a PDF document in the destination path with the ***GraveyardShift*** logo prepended.

***

## Author

👤 **Sihle Masebuku <snts.abode@graveyardshiftco.com>**


## Show your support

Give a ⭐️ if this project helped you!

***
