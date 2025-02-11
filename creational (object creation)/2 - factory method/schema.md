                             +--------------------------+
                             |       Creator (abstract) |
                             |  (VehicleFactory class)  |
                             +--------------------------+
                             | + createVehicle()        |  <-- Factory Method (abstract)
                             +--------------------------+
                                /             \
                               /               \
                    +------------------+    +-----------------+
                    | ConcreteCreator  |    | ConcreteCreator |
                    |    (CarFactory)  |    |    (TruckFactory)|
                    +------------------+    +-----------------+
                    | + createVehicle()|    | + createVehicle()|
                    +------------------+    +-----------------+
                            |
                            | creates
                            |
                  +----------------+          +----------------+
                  |     Car        |          |    Truck       |
                  |    (Product)   |          |   (Product)    |
                  +----------------+          +----------------+
                  | + drive()      |          | + drive()      |
                  +----------------+          +----------------+
