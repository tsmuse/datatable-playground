# Wrapup notes -- 22 March 2019

## Why putting on the shelf?
- No devs currently working on this project
- Discovery of themeing options in existing module


This is a brief summary of the notes I made while I was exploring the datatable. My full notes are in [my full notes](./Data_table_restyle_notes.pdf)
## Things to consider when picking back up
- As is the layout and styling methods lend themselves well to tables that are embedded in either a text document or a card in a dashboard (see sketches in notes)
  - Removing length option and fixing the length feels like it's the "best" option and should be the default in these contexts, but seems likely it will not always be deployed that way
  - Styling here needs to largely follow the lead of the containing document. Default style should probbaly be complimentary to Flexdashboard
  - In-line use of filter control makes the most sense here, as in the final coded version with the label text stripped out
- Using the table as the center-piece of a view inside an application is the most challenging for the existing module
  - Seperated controls make the most sense here, maybe even custom controls?
  - Setting an explicit set of containers around each item the plugin renders gives us the most flexability to make this feel like an app view, not just the generic table spit out with some controls floating around it. This is where the context flexibilty will come from
  - Table growing larger than the viewport is an issue that liekly needs to be controled on a case-by-case basis. Giving the option for duel pagination controls makes sense and solves the usability issue, but isn't the fashionable solution to the problem
  - Infinite scroll would be cool, but seems totally contrary to the paradigm that the table is built on
  

