var produits = document.getElementById("produits");

var cats1 = [

    ` <article class="card">
                    <div class="parent">
                        <div class="image">
                            <img src="Products/product1.png" alt="">
                        </div>
                       
                        <h3 id="myBtn" onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                        <div class="star">
                            <img src="Products/star.svg" alt=""> 
                            <img src="Products/star.svg" alt=""> 
                            <img src="Products/star.svg" alt=""> 
                            <img src="Products/star.svg" alt=""> 
                            <img src="Products/star.svg" alt=""> 
                            <span> (1.5k) </span>
                        </div>
                        <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="/Products/product16.webp" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="/Products/product16.webp" alt="artisana product">
                                    <img src="/Products/product16.webp" alt="artisana product">
                                    <img src="/Products/product16.webp" alt="artisana product">
                                    <img src="/Products/product16.webp" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card" onclick="Panier()">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

        </article>` ,   
                
                `<article class="card">

                    <div class="parent">
                    <div class="image">
                        <img src="Products/product2.png" alt="">
                    </div>
                   
                    <h3 id="myBtn" onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>` , `
                <article class="card">

                    <div class="parent">
                    <div class="image">
                        <img src="Products/product18.webp" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>


                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>` , 
                ` <article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product4.png" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>` ,

                `<article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product3.png" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>` , 

                `<article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product20.jpg" alt="">
                     
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>
                </article>`

];


var cats2 = [ 

    `<article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product10.png" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>`,

            `<article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product15.webp" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>` ,

                `<article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product19.jpg" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>

                </article>` ,

                `  <article class="card">
                    <div class="parent">
                    <div class="image">
                        <img src="Products/product16.webp" alt="">
                    </div>
                   
                    <h3 onclick="Display_Modal()">Mug et Jarre en Argile Faits Main.</h3>
                    <div class="star">
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <img src="Products/star.svg" alt=""> 
                        <span> (1.5k) </span>
                    </div>
                    <p class="price">2021.23 MAD <span>421.23 MAD</span></p>
                    </div>


                    <div id="myModal" class="modal">

                        <article class="product_details">
                
                            <div class="close">
                                <i class="fa fa-remove" style="font-size:25px"></i>
                            </div>
                    
                            <div class="images">
                                <div class="main_img">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                                <div class="imgs">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                    <img src="Products/product2.png" alt="artisana product">
                                </div>
                            </div>
                    
                            <div class="details">
                    
                                <h1>Heading Title</h1>
                                <hr>
                                <div class="reduction">40 % de réduction</div>
                    
                                <div class="stars">
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <img src="Products/star.svg" alt=""> 
                                    <span>(4.7k)</span>
                                </div>
                    
                                <p class="price">235.25 MAD <span>650.84 MAD</span></p>
                                <h4>About This Item</h4>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima, aut et modi harum consectetur odit nihil, dolorum molestiae dicta sed hic repudiandae cum quaerat ab tenetur. Quos, eveniet. Esse </p>
                                <div>
                                    <button class="add_to_card">Add To Card &nbsp;
                                        <i class="fa fa-credit-card-alt" style="font-size:14px"></i>
                                    </button>
                                    <button class="favorit">
                                        Favorit &nbsp;
                                        <i class="fa fa-heart" style="font-size:15px;"></i>
                                    </button>
                                </div>
                    
                            </div>
                    
                        </article>
                
                    </div>

                </article>`

];
 

function Ustensiles(){

    produits.innerHTML = ''; 

    cats1.forEach(cat => {

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = cat;
        
        produits.appendChild(tempDiv);
    });

}


function Vetements(){

    produits.innerHTML = ''; 

    cats2.forEach(cat => {

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = cat;
        
        produits.appendChild(tempDiv);
    });

}