# Images for Holy Rosary Online

This folder should contain the images representing the different mysteries, as well as a default image to be shown when not on a mystery/decade. The image files themselves (.jpg) are not tracked in git, in order to avoid a large repo size. However, there is a text file (.md) for each image, with a link to the source (usually Wikimedia Commons) and the name and artist of the work.

The structure for this directory, once you add all the image files (such as if you are recreating the site from source) should be as shown below. Cropping or editing the image files is completely up to you. Notice that they are all in a "default" directory. This will allow for a future feature of adding different art period options, such as baroque, modern, Byzantine, etc. For now, all the default images are from around the baroque period, with no option to pick anything else:

```
default/default.jpg
default/default.md
default/annunciation.jpg
default/annunciation.md
default/visitation.jpg
default/visitation.md
default/nativity.jpg
default/nativity.md
default/presentation.jpg
default/presentation.md
default/finding.jpg
default/finding.md
default/baptism.jpg
default/baptism.md
default/cana.jpg
default/cana.md
default/proclamation.jpg
default/proclamation.md
default/transfiguration.jpg
default/transfiguration.md
default/eucharist.jpg
default/eucharist.md
default/agony.jpg
default/agony.md
default/scourging.jpg
default/scourging.md
default/thorns.jpg
default/thorns.md
default/cross.jpg
default/cross.md
default/crucifixion.jpg
default/crucifixion.md
default/resurrection.jpg
default/resurrection.md
default/ascension.jpg
default/ascension.md
default/descent.jpg
default/descent.md
default/assumption.jpg
default/assumption.md
default/coronation.jpg
default/coronation.md
```