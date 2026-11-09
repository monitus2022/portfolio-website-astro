---
title: "O.W.L. Online"
summary: "A live retrieval-augmented study assistant that answers questions from source books and cites where each answer comes from."
role: "Designer and developer"
timeframe: "Live"
status: "live"
featured: true
order: 1
stack:
  - Retrieval-augmented generation
  - LLM applications
  - Web app
highlights:
  - "Answers are grounded in the supplied books instead of open-web content."
  - "Every response cites its sources so readers can verify the answer."
  - "Live demo and OpenAPI documentation are publicly available."
demoUrl: "https://api.monitus.org/"
docsUrl: "https://api.monitus.org/docs"
---

## Overview

O.W.L. Online is a public question-answering interface for studying from books. Instead of
returning a free-form answer from a general model, it retrieves the relevant passages first and
uses them to ground the response.

## What it does

- Answers natural-language questions about the source material.
- Shows citations so the reader can check the original text.
- Runs as a live web app with a documented API.

## Why it matters

The project is a small, end-to-end example of turning retrieval-augmented generation into
something usable: a focused interface, source-grounded answers, and a public demo that can be
tested without a local setup.
