import cars from "../models/Car.js";

class CarController {

    static listarCars = (req, res) => { 
        cars.find()
        .populate('montadora', 'nome')
        .populate('tipo', 'nome')
        .exec((err, cars) => {
            res.status(200).json(cars) })}

            static listarCarsPorTipo = (req, res) => {
                const tipo = req.query.tipo;
                cars.find({'tipo': tipo}, {}, (err, cars) => {
                    res.status(200).send(cars)
                 })
             }

            static listarCarsPorId = (req, res) => { 
                const id = req.params.id;

                cars.findById(id)
                .populate('montadora', 'nome')
                .populate('tipo', 'nome')
                .exec((err, cars) => {
                    res.status(200).json(cars) })}

            static cadastrarCar = (req, res) => {
                let car = new cars(req.body);
                car.save((err) => {
                    if(err) { res.status(500).send({message: `${err.message} - falha ao cadastrar car.`})}
                    else {
                        res.status(201).send(car.toJSON()) 
                    }
                }
                )
            }

            static atualizarCar = (req, res) => {
                const id = req.params.id;
                cars.findByIdAndUpdate(id, {$set: req.body},
                    (err) => {
                    if(!err) { res.status(200).send({message: 'Car has sucefful updated'})}
                    else {
                        res.status(500).send({message: err.message})
                    }
                }
                )
            }
        
            static excluirCar = (req, res) => {
                const id =req.params.id;
                cars.findByIdAndDelete(id, (err) => { 
                    if(!err) {res.status(200).send({message: 'Car removido com sucesso'})}
                    else { res.status(500).send({message: err.message})
                }
                }
                )
             }
         }
   


export default CarController;