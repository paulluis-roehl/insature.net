---
id: computer_architecture
aliases: []
tags: []
created: 2026-08-18 01:00
description: How to build a computer.
modified: 2026-08-28 10:48
title: Computer architecture
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
A program is a collection of machine code instructions, which in the Hack architecture are stored in a piece of read-only memory (ROM).

### In/Out

A quick note on interacting with the computer: we abstract display, keyboard etc. away through the concept of a _memory map_: all these peripherals just correspond to certain areas in the RAM.
Writing to the right addresses has, for example, the effect of drawing onto the screen.
Reading from the memory-mapped addresses could get the value of a pixel, the current key pressed or various other information from the peripherals.
We delegate the implementation of the memory map to the hardware providers.

## Software

The second task is to translate machine code into something human-readable (or, rather, vice-versa).
In this project, the final destination was a Java-like programming language called _Jack_.
The process is broken down into two steps: going from Jack to a virtual machine (VM) and going from the VM to binary code.

The virtual machine is based on a _stack_ architecture.
Parameters can be `push`ed from and `pop`ped into various memory _segments_ (for example, `static` for static variables or `this` and `that` pointers inside of the `heap` for dynamically allocated variables and objects).
In the following example, the first argument of a function contains the pointer to an object, whose third property is a number that should be changed to 42.
```
push ARGUMENT 0 // get object pointer from first argument
pop POINTER 1 // set the base address of the `THAT` segment
push CONSTANT 42 // `CONSTANT` is a virtual segment that can only be pushed from
pop THAT 2 // write into third property of object
```
The VM also allows for function definitions and calls. Whenever a function is called, it pushes a new _stack frame_ on top of the stack (this contains the addresses of the previous `ARGUMENT`, `LOCAL`, `THIS`, `THAT` segments as well as the return address in the ROM).
After all these commands are correctly translated into Assembly (which is, essentially, a shorthand notation for machine code) the VM provides a fully functional programming language.

Going from the virtual machine to Jack brings about all the amenities of modern programming languages: object orientation, loops, if-statements and so on.
The Jack-to-VM compiler is split into a _tokenizer_, which parses an input file into a stream of valid language tokens, and a _compilation engine_, which makes sure the tokens constitute valid sentences within the programming language and subsequently writes the corresponding VM code.

### Operating system

A special piece of software is the operating system.
While in a real computer the OS is responsible for drivers, privileges and users, the running of multiple processes in parallel and more, the _Hack OS_ provides only a small standard library of Jack functions.
This includes drivers for interacting with keyboard and screen as well as essential maths commands, functionality for Arrays and Strings and basic memory management.

## References

- _The elements of computing systems: building a modern computer from first principles_ (2008) by Noam Nisan and Shimon Shocken.
  - the book for Nand2Tetris and the main reference for this note.
  - it comes with an [interactive web IDE](https://www.nand2tetris.github.io/web-ide) that is feature-rich and largely bug-free.
- _Structured computer organization_ (6th edition, 2013) by Andrew Tanenbaum and Todd Austin
  - this is a classic.
- _Step-by-step design and simulation of a simple CPU architecture_ (2013) by Derek Schuurman
  - a short educational article, based on the book by Tanenbaum and Austin.

[^a]: We will ignore any other form of long-term storage for now.
