---
id: metabolism
aliases: []
tags: []
created: 2026-08-28 10:51
description: The basics of how metabolism works.
modified: 2026-09-02 22:14
title: Metabolism
---

The three main sources of nutrients that the body needs to function (the *macronutrients*) are proteins, sugars (i.e. carbohydrates) and fats.
The body uses these to build and repair itself and burns them for energy.
In times of plenty, it stores them for later use.

This whole process, under which nutrients get used, reused and burnt, is called the *metabolism*.[^a]
At the heart of it lies the *citric acid cycle* (CAC), or *Krebs cycle*.
After the macronutrients are digested into their constituents (amino acids, glucose and fatty acids), they are either directly reassembled by the body or they are thrown into the Krebs cycle for further disassembly and reassembly.

At this point, all nutrients have become equal, in the form of intermediates of the Krebs cycle.
Such intermediates can also be used in reverse to produce (synthesise) amino acids (for protein building) or glucose and fatty acids (for storage).
This allows the body to change the individual nutrients into each other, depending on demand.

The exception are the *essential amino acids*, called this way exactly because they are not synthesisable by the human body and need to be obtained from external protein sources.

Furthermore, there is no storage for amino acids!
They are either directly used for building proteins or, if there is no need for this, converted through the Krebs cycle into sugars and fats for storage.
Conversely, in times of need, the body may cannibalise its own proteins and muscles, burning them for energy.


| Macronutrient | Constituents | Storage form     |
|---------------|--------------|------------------|
| proteins      | amino acids  | ---              |
| carbohydrates | glucose      | glycogen         |
| fats          | fatty acids  | triacylglycerol |


![metabolism](/assets/metabolism.svg)

## Krebs cycle

The Krebs cycle happens in the mitochondria (which are, after all, the powerhouse of the cell).
It consists of eight intermediates that are transformed into each other in this order:

1. Citrate
2. Isocitrate
3. α-Ketaglutarate
4. Succinyl-CoA
5. Succinate
6. Fumarate
7. Malate
8. Oxaloacetate

Finally, oxaloacetate is converted back into citrate using acetyl-CoA (CoA = coenzyme A).
Steps in this cycle produce waste products (like $H_2O$ and $CO_2$), but more importantly energy.
The main unit for energy in the body is ATP (Adenosine triphosphate).
The citric acid cycle does not directly just produce ATP, but it produces other 'energy carriers', which are converted by the body into ATP.
One round of the cycle produces on average 10 ATP.

## Glycolysis

Sugars are a particularly quick & easy way to generate energy.
A single glucose molecule is reduced to two pyruvate molecules and, in the process of this, already generates 7 ATP.
Two goes of the Krebs cycle produce in total $2 \times (10 + 2.5) = 25$ ATP, landing glucose at 32 ATP net total.

Next to free ATP lying around, glucose (stored in glycogen molecules) is the quickest way to get further ATP in the muscles under exertion.

The single largest storage of glycogen is in the liver, amounting to about 10% and giving off a constant glucose stream into the blood.
Another 1-2% is stored in the muscles, for direct use.

## Creatine

While the muscles exert themselves and ATP is being used, before the glycogen stores (or later the triacylglycerols) are touched, there is another source of ATP, through creatine.

This is essentially your body cheating itself:
There is a reaction at equilibrium that converts $\ce{ATP + creatine -> ADP + phosphocreatine}$.
If there is a sufficient amount of creatine in your muscles, this binds one phosphor group from the ATP in the higher energy compound phosphocreatine.
Meanwhile, the body replenishes the ATP to make sure there is sufficient supply.

When ATP drops under exertion, the equilibrium reaction goes the other way, releasing the nicked phosphor group and producing more ATP on the fly, until the reserve of phosphocreatine is also emptied.

This is the basic reason behind creatine supplements.

## Urea cycle

Amino acids contain amino groups, which are stripped away when breaking them down for the Krebs cycle.
This results into (small amounts of) ammonia ($\ce{NH3}$) being produced, which is poisonous.
The body takes care this by synthesising urea, which binds the ammonia and safely excretes it via the urine.
The synthesisation happens in the liver, after which the urea is transported to the kidneys.

## The liver

While reading up on this, I got the impression that the liver is the real star of metabolism.
Some of the things it does are:

- stores 10% of glycogen, gives off constant glucose supply in blood
- synthesises urea to get rid of $\ce{NH3}$
- synthesises bile acids (which go from the liver to the gallbladder), which are necessary for digestion of fats
- only the liver can dispose cholesterol
- main site of lipogenesis (creation of fats for storage)
- manages a whole transport system of fats through the body (via *lipoproteins*)

## References

- Voet, Donald, Judith G. Voet, and Charlotte W. Pratt. 2016. Fundamentals of Biochemistry: Life at the Molecular Level. John Wiley & Sons.

[^a]: one further distinguishes two parts: the catabolism (which breaks things down) and the anabolism (which builds new stuff).
