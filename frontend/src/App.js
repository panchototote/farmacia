import data from './data';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Tu-Farmacia</a>
            </div>
            <div>
                <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
                <a href="signin.html"><i class="fas fa-power-off"></i></a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.products.map((products) =>(
                  <div key={products._id} className="card">
                    <a href={`/product/${products._id}`}>
                        <img className="medium" src={`./imagenes/${products.foto}`} alt={products.name}/>
                    
                    <div className="card-body">
                            <h2>{products.name}</h2>
                        <div className="principio">
                            <span>
                                <dl>
                                  <dt>{products.principio}</dt>
                                  <dt>{products.categoria}</dt>
                                  <dt>{products.formato}</dt>
                                </dl> 
                            </span>        
                        </div>
                        <div className="price">
                            <i className="fas fa-dollar-sign"> </i> {products.precio}               
                        </div>
                    </div>                    
                    </a>
                </div>   
                ))
              }
                             
            </div>
        </main>
        <footer className="row center">
            Derecho Reservados
        </footer>
    </div>
  );
}

export default App;
