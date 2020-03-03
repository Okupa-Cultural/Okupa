import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import OkInput from '../Generales/OkInput/OkInput';
import OkTabla from '../Generales/OkTabla/OkTabla';
import OkRegistro from '../Generales/OkTabla/OkRegistro';

export default class TarjetaRegistroCuatro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tblElementosEscenario : {},
            tblElementosDeIluminacion : {},
            cantidadRowsEscenario: 1,
            cantidadRowsIluminacion:0,
            rowsEscenario: [],
            rowsIluminacion: []
        };
    }

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(5 , formFormateado);
    };

    agregarRow = (tabla) => {
        if(!tabla) {
            this.setState({
                cantidadRowsEscenario : this.state.cantidadRowsEscenario + 1
            });
        } else {
            this.setState({
                cantidadRowsIluminacion : this.state.cantidadRowsIluminacion + 1
            });
        }

    };

    
    eliminarRow = (tabla, index) => {
        if(!tabla) {
            let rowsEscenario = this.state.rowsEscenario;
            const indice = rowsEscenario.indexOf(index);
        
            rowsEscenario.splice(index, 1);
            
            this.setState({
                cantidadRowsEscenario: this.state.cantidadRowsEscenario - 1,
                rowsEscenario: rowsEscenario,
            });
        }
    }

    renderRowsEscenario = (index) => {
        return <OkRegistro key={index}  onRemove={() => this.eliminarRow(0, index)}/>
    }
    
    render() {

        let rowsEscenario = [];
        for(var i = 0;i < this.state.cantidadRowsEscenario;i++) {
            rowsEscenario[i] = this.renderRowsEscenario(i);
        }
        
        if(rowsEscenario == this.state.rowsEscenario) {
            this.setState({
                rowsEscenario: rowsEscenario,
            });
        }

        return(
            <section className="abm-seccion">
                <form className="tarjetas-registro-abm-form" onSubmit={this.handleForm} action="">
                    <h2>¡Ya casi terminamos!</h2>
                    <h3>
                        - Completa la lista de elementos para tu puesta en escena -
                        <br />
                        <b>Es opcional pero muy recomendable</b>
                    </h3>
                    
                    <OkTabla onClickFunction={() => this.agregarRow(0)} Titulo="Elementos de escenario">
                        {rowsEscenario}
                    </OkTabla>

                    <OkTabla  Titulo="Elementos de iluminacion">
                        <OkRegistro Cantidad="100" Descripcion="Me siento feliz" />
                        <OkRegistro Cantidad="1000" Descripcion="De estar aprendiendo a hacer" />
                        <OkRegistro Cantidad="100000" Descripcion="Componentes complejos" />
                        <OkRegistro Cantidad="1000000" Descripcion="En React :D" />
                    </OkTabla>
                    
                    <h3>
                        Subí los planos de tu puesta en escena.<b> También es opcional</b>
                    </h3>
                    <div className="subir-planos">
                        <OkInput Type="file" Format="small" Icon="upload" Placeholder="Plano de escenario" Name="escenario" />
                        <OkInput Type="file" Format="small" Icon="upload" Placeholder="Plano de luces" Name="luces" />
                    </div>

                    <Link to="/feed">
                        <OkInput Type="submit" Value="Finalizar" />
                    </Link>
                </form>
            </section>
        );
    }
}