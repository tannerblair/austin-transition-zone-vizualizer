# Austin Transition Zone Vizualizer
A web app for visualizing the transition zone offsets proposed by City Council.

![](images/sample.png)
## Usage
The offsets in this tool are based on a presentation given to [Austin City Council on August 28th, 2019](http://www.austintexas.gov/department/city-council/2019/20190828-spec.htm).

It's still very much in an early state, so you have to manually provide GPS coordinates.

### Setup

1. Pull down the repository.
2. Change js/bounds.js to contain your desired path.
3. Open index.html

### Usage

#### Offset
Depending on the quality of your dataset, the line on the map may or may not line up cleanly with the edge of your street. You can adjust this by sliding offset until the black line in the middle is aligned with the street at the point you're examining.

#### Street Width

City Council has stated that the width of transition zones will likely be between 500ft and 700ft, with an absolute max of 850ft. Use the readio buttons to select which of these scenarios you want to visualize.
