<!--- ![Go-LMS Logo](https://github.com/cbrom/Go-LMS/blob/cbrom/docs/assets/log.png) --->

# Akademik

<p align="center">
    <a href="https://travis-ci.org/daptin/daptin"><img alt="Travis" src="https://img.shields.io/travis/daptin/daptin.svg?style=flat-square"></a>
    <a href='https://semaphoreci.com/artpar/daptin'> <img src='https://semaphoreci.com/api/v1/artpar/daptin/branches/master/badge.svg' alt='Build Status'></a>
    <a href='https://circleci.com/gh/daptin/daptin'> <img src='https://circleci.com/gh/daptin/daptin.svg?style=svg' alt='Build Status'></a>	
<p align="center">
    <a href="/LICENSE"><img alt="Software License" src="https://img.shields.io/badge/LICENSE-LGPL%20v3-brightgreen.svg?style=flat-square"></a>
    <a href="https://goreportcard.com/report/github.com/daptin/daptin"><img alt="Go Report Card" src="https://goreportcard.com/badge/github.com/daptin/daptin?style=flat-square"></a>
    <a href="http://godoc.org/github.com/daptin/daptin"><img alt="Go Doc" src="https://img.shields.io/badge/godoc-reference-blue.svg?style=flat-square"></a>
</p>
<p align="center">
    <a href="https://codecov.io/gh/daptin/daptin"><img alt="Codecov branch" src="https://img.shields.io/codecov/c/github/daptin/daptin/master.svg?style=flat-square"></a>
    <a href="https://github.com/daptin/daptin/releases/latest"><img alt="Release" src="https://img.shields.io/github/release/daptin/daptin.svg?style=flat-square"></a>
</p>
<p align="center">
     <a href="https://discord.gg/t564q8SQVk"><img src="https://img.shields.io/badge/JOIN-ON%20DISCORD-blue&?style=for-the-badge&logo=discord" /> <a/> 
</p>

A Bible school Seminary Learning Management System (Adullam) in golang for the purpose of learning a software development process.

---

## Features

* Coaches
* Students
* Live learning
* Course curriculum 

## Deploying to production

Have doubts? Talk to our development team on [our Discord server](https://discord.gg/fMBfuq).

## Setup for development

1. Install postgresql
2. Install redis (optional)
3. ```clone the repo```
4. ```cd Go-LMS```
5. ```go run cmd/api/main.go```

### Note
Any configuration goes to .env file.
Do not run main program from outside the main directory.
