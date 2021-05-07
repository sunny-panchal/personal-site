## Risotto Stone

##### An AI cooking assistant to decipher the secrets of making the perfect risotto

Post date: May 7, 2021


---

<p align="center">
    <img src="https://raw.githubusercontent.com/sunny-panchal/sense/master/docs/gifs/chopping_garlic.gif" 
width="300px">
    <img src="https://raw.githubusercontent.com/sunny-panchal/sense/master/docs/gifs/keep_stirring_1.gif" width="300px">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/sunny-panchal/sense/master/docs/gifs/chilli_to_pot.gif" 
width="300px">
    <img src="https://raw.githubusercontent.com/sunny-panchal/sense/master/docs/gifs/add_rice.gif" width="300px">
</p>

Back in Edinburgh a friend taught me the secret to making the perfect Risotto: slowly adding the broth a little
at a time and non-stop stirring! My shoulders were not happy but man, did it turn out amazing! As a joke I thought it
would be pretty funny if you could prop up your phone and get it to yell at you every time you stopped stirring. Fast 
forward a year and I got a chance to build a little demo to do just that at one of TwentyBn's employee hackathons!

Besides the fun of my laptop yelling at me when I stop stirring, there's a real pain-point in my cooking that inspired 
me to build this. I love trying out new (vegan!) recipes but have always found it annoying having to scroll through
the instructions while cooking. What I need is some system that automatically tracks the progress of my cooking and 
delivers timely instructions. Even beyond that, a system that monitors what I'm cooking itself (and stops me from ever
burning a dish again...) and gives useful tips and tricks would help me become a better cook. 

RisottoStone is a proof-of-concept, mvp of sorts, for the former that can detect *basic* everyday kitchen activities 
and use these to help you cook the perfect Risotto. It can recognize someone:
- placing a pot on the stove
- adding ingredients to the pot
- chopping ingredients
- stirring the pot
- tasting the food
- giving a thumbs up (backup for navigation)
- background (doing random things in the kitchen)

Building the demo was extremely simple using the powerful transfer learning capabilities of **[Sense](https://github.com/TwentyBN/sense)**.
The development kit comes with pre-trained neural network weights that have been trained on millions of videos of
human actions and hence lends robust features that reduce the dataset size for transfer learning. In total I used 
an average of 11 videos per class in the training set and 4-5 in the validation set. Videos were approximately 8
seconds long and obtained from three people -- two of which were included in the training set and the third exclusively
in the validation set. 

The full video of the demonstration can be found [here](https://drive.google.com/file/d/1GzO_z5SY3D0t3yKOY7mwxREWjGxr9Mbi/view?usp=sharing) where you'll also be able to hear the basic text-to-speech 
that was used and the audible alerts when I stopped stirring. You can also check out the code powering RisottoStone 
and try it out for yourself on my fork of the Sense repo [here](https://github.com/sunny-panchal/sense). 

Overall the project was quite successful as a basic proof-of-concept and I was even able to get it monitor a whole 
cooking session -- and yes, the risotto turned out delicious! There are many things that could be improved and I'd love 
extend its capabilities in the future. For instance, the classes and examples it can currently detect are quite basic 
and could easily be improved by collecting more data. It would be neat to add some more fine-grained object-level
labels to the 'adding_ingredients' class to get the model to detect what exactly is being added. I also haven't tested
the model's generalization to people its never seen and new kitchen environments so if any of you try it out, I'd love 
to hear your feedback!

###### Dataset breakdown
| Classes           | # of Videos (Training set)  | # of Videos (Validation set)  | 
| ----------------- |:--------------------:| -------------------------:|
| adding_ingredient | 11                   | 7                         |
| background        | 15                   | 4                         |
| chopping          | 12                   | 4                         | 
| placing_pot       | 13                   | 5                         |
| ready             | 12                   | 4                         |
| stirring_pot      |  9                   | 5                         |
| tasting           |  6                   | 3                         |


###### Dataset samples
<p align="center">
    <img src="/gifs/risotto_stone/chop.gif" width="200px" height="140px">
    <img src="/gifs/risotto_stone/placing_pot.gif" width="200px" height="140px">
    <img src="/gifs/risotto_stone/tasting.gif" width="200px" height="140px">
</p>

<p align="center">
    <img src="/gifs/risotto_stone/adding_ingredient.gif" width="200px" height="140px">
    <img src="/gifs/risotto_stone/stirring.gif" width="200px" height="140px">
    <img src="/gifs/risotto_stone/ready.gif" width="200px" height="140px">
</p>
