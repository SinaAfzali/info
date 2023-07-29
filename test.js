
var setproduct = function(productImage, productName, productDescription){
    var newProduct = document.createElement('div');
    newProduct.classList.add('product-item');
    newProduct.innerHTML = '<img class="product-image" src="' + productImage + '" alt="' + productName + '">' +
                           '<h2>' + productName + '</h2>' +
                           '<p>' + productDescription + '</p>' +
                           '<button>افزودن به سبد خرید</button>';
  
    var productList = document.querySelector('.product-list');
    productList.appendChild(newProduct);
}

document.getElementById('click2').addEventListener('click', function() {
for(var j=0;j<1;j++) { 
    for(var i=1;i<57;i++){
        var image='/image/'+i+'.jpg'
        var name='محصول'+' '+i;
        var description='توضیحات '+' '+name;
        setproduct(image, name, description);
    }
}
  
  });

