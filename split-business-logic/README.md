# Separation of business logic and UI/DB/other components

This is a small example code with a couple of classes. It demonstrates the core (business logic) with its single method `sell` and how it must be split from non-significant details like the DB and UI.

In this example we delegate db-specific task of saving a sale deal to a special service responsible for working with the DB.

That layer (kinda repository) maps the business logic car object (ICarBL) to an object that the DB will understand.

> Note: all code here is pseudocode. Do not run it!
