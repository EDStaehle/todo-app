# documentation

Global state is consumed on a few different levels on this application. first it is being consumed in the the list to determine the number of items to display. second it is being consumed on the header to determine the number of incomplete items.

The use form hook is being used as a form in the application that can render both the form and the other components it needs to render such as the list it is also being used to set global states from form input such as the items and the list so that other components can use them.
