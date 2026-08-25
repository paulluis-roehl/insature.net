---
id: computer
aliases: []
tags: []
created: 2026-08-18 01:00
description: How to build a computer.
modified: 2026-08-26 00:04
title: Computer-Architecture
---

<small>_This note is based on a 50-hour course I gave in the summer of 2026 to a group of high-school students in Germany, which in turn is based on the excellent [Nand2Tetris](https://www.nand2tetris.org/)._</small>

## Hardware

If we strip everything non-essential away, a _Computer_ is an object that does two things: it computes stuff, and it talks to storage (both for reading and writing).
The computing is done in the _CPU_ (Central Processing Unit), the storing in the _RAM_ (Random Access Memory).[^a]

Memory (which, next to the RAM, is also used in the CPU for storing temporary results) consists of billions of individual storage cells (bits) that can store, and potentially overwrite, one bit of information. We refer to a word of 16 bits as a _register_.
An individual bit can be (for example) built out of logic gates, in the form of a _D flip flop_.

The CPU architecture is a design choice (the one by Nisan & Shocken is called _Hack_).
The most important part in the CPU is the _ALU_ (Arithmetic Logic Unit), which performs the actual computations.
There are lots of knobs to twist and turn: to decide in every cycle what is computed, where the inputs are taken from, where the result is stored, where to go next in the program and so on.
The pile of bits that selects all the right operations is the _machine code_ of that instruction.

`[insert image here]`


### In/Out

A quick note on interacting with the computer: we abstract display, keyboard etc. away through the concept of a _memory map_: all these peripherals just correspond to certain areas in the RAM.
Writing to the right addresses has, for example, the effect of drawing onto the screen.
Reading from the memory-mapped addresses could get the value of a pixel, the current key pressed or various other information from the peripherals.
We delegate the implementation of the memory map to the hardware providers.

## Software

`[TODO]`

## References

- _The elements of computing systems: building a modern computer from first principles_ (2008) by Noam Nisan and Shimon Shocken.
  - the book for Nand2Tetris and the main reference for this note.
- _Structured computer organization_ (6th edition, 2013) by Andrew Tanenbaum and Todd Austin
  - this is a classic.
- _Step-by-step design and simulation of a simple CPU architecture_ (2013) by Derek Schuurman
  - a short educational article, based on the book by Tanenbaum and Austin.

[^a]: We will ignore any other form of long-term storage for now.
