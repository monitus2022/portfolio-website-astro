---
title: "HK Housing Datahub"
summary: "A searchable Hong Kong housing data platform: 9,700+ estates, property transactions, district trends, and an estate map built from public data."
role: "Designer and developer"
timeframe: "2025–2026"
status: "live"
featured: true
order: 2
stack:
  - Python
  - SQLite
  - React
  - Vite
  - Cloudflare
highlights:
  - "Unifies estate, building, unit, transaction, and monthly market data into a versioned serving snapshot."
  - "Covers 9,700+ estates and more than 1 million transactions from public Hong Kong sources."
  - "Ships as a static React dashboard with estate search, district price trends, and an estate map."
demoUrl: "https://hk-housing.monitus.org/"
---

## Overview

HK Housing Datahub is an ETL and data-platform project for Hong Kong housing data. It collects
public estate, building, unit, transaction, and monthly market data, normalises it into a
relational SQLite model, and publishes a versioned serving snapshot for a static dashboard.

## What it does

- Searches 9,700+ estates by name or district.
- Shows recent transactions, prices, and 12-month activity for each estate.
- Explores district price trends and an estate map.
- Surfaces dataset coverage and the snapshot version behind each view.

## Why it matters

The project covers the full path from messy public data to a usable product: ingestion,
normalisation, analytics marts, and a static frontend that is cheap to host and easy to keep
reproducible.

## Data and scope

Data comes from Hong Kong Property and Wikipedia. It is for educational, non-commercial use and
is not an official or authoritative source.
