import React, {Component} from 'react'; 
import pic1 from './best-creamed-spinach-recipe-1-768x1155.jpg';
import pic2 from './baked-potato-recipe-3-768x1154.jpg';
import pic3 from './best-baked-apples-recipe-2-768x1157.jpg';
import axios from 'axios';

class Con extends Component {

    constructor(props) {
    super(props);
    this.state = {whichpage: 0,bitcoinprice:0};

    // This binding is necessary to make `this` work in the callback    
    /* this.handleClick = this.handleClick.bind(this); */  
    this.goPost1Clicked = this.goPost1Clicked.bind(this);
    this.goPost2Clicked = this.goPost2Clicked.bind(this);
    this.goPost3Clicked = this.goPost3Clicked.bind(this);
    this.goHomeClicked = this.goHomeClicked.bind(this);
    }

  goPost1Clicked() {    this.setState({whichpage:1});  }
  goPost2Clicked() {    this.setState({whichpage:2});  }
  goPost3Clicked() {    this.setState({whichpage:3});  }
  goHomeClicked()  {    this.setState({whichpage:0});  }


  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

    tick() {  
        var this_object = this;

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function() {
          const obj = JSON.parse(this.responseText);
          console.log(obj.USD.last)
          this_object.setState({bitcoinprice:obj.USD.last})
        });
        oReq.open("GET", "https://blockchain.info/ticker");
        oReq.send();

}

        /* this.setState({      bitcoinprice: second+ 1   }); */  




  render() {
    var post1sum =  <div className="post-container" id="firstpost" onClick={this.goPost1Clicked}>
    <h1><a id="First_Post" onClick={this.goPost1Clicked}>Fresh Creamed Spinach</a> </h1>
    <time className  = "time-format">
     November 17, 2021
    </time>

    <img src={pic1} alt="best-creamed-spinach-recipe" style={{float:"right",width:200, height:300, padding: 10, outline: 5}}/>
    <p>Creamed spinach can go right or wrong, and this creamed spinach recipe is just right. The creaminess comes from cream cheese rather than heavy cream, which offers some delectable tanginess. Fresh baby spinach cooks down in mere minutes, no chopping required, so this recipe is ready in roughly twenty minutes. </p>
    <p>Creamed spinach will never be the prettiest menu item on your Thanksgiving table, but the verdant color of freshly cooked spinach will liven up otherwise beige plates. The more greens the better, I say.</p>

    <p>I didn’t grow up with creamed spinach at our Thanksgiving suppers. I’ve found it on steakhouse menus while searching for vegetarian options. The name “creamed spinach” doesn’t sound terribly enticing, does it? </p> 
    <p>I wasn’t sold on the general concept until I realized that it’s almost like spinach dip in side dish form. Creamed spinach earned my full attention in that moment. After some trial and error, I’m sharing this recipe because I think it’s worthy of your attention, too. It’s delicious, creamy, comforting and just so nice!</p>
    </div>

    var post2sum =     <div className ="post-container" id="secondpost" onClick={this.goPost2Clicked}>
    <h1>Best Baked Potato </h1>
    <time className  = "time-format">
     November 8, 2021
    </time>
    <img src={pic2} alt="baked-potato-recipe" style={{float:"right", width:200, height:300, padding: 10, outline: 5}}/>
      <p>Meet the baked potato of my dreams! These baked potatoes are fluffy on the inside and crisp on the outside. They’re exactly the kind of baked potato I’ve been craving. If you share my definition of what a baked potato should be, you could call these potatoes perfect.</p>
      <p>I baked potatoes every which way to arrive at this recipe. I tried various baking temperatures, different crisping methods, and even analyzed how and when to slice open those beautiful baked spuds.</p>
    </div>

    var post3sum =     <div className ="post-container" id="thirdpost" onClick={this.goPost3Clicked}>
    <h1>Perfect Baked Apples </h1>
    <time className  = "time-format">
     October 19, 2021
    </time>
    <img src={pic3} alt="best-baked-apples-recipe" style={{float:"right",     width:200, height:300, padding: 10, outline: 5}}/>
    <p>Craving something sweet? These baked apples are a delightful dessert featuring seasonal fruit. They taste like an apple crisp but look much cuter.</p>

    <p>This baked apple recipe is all in the technique, but it’s not complicated. I’ll walk you through it below.</p>
    <p>You’ll need a short list of ingredients to make this recipe—apples, oats, coconut or brown sugar, optional pecans or walnuts, and butter. We’ll add a little bit of cinnamon and salt to take the flavor over the top.</p> 
    <p>Serve these wholesome baked apples with a scoop of vanilla ice cream or creamy yogurt. They’re sweet enough to taste like a treat, but wholesome at the same time. Serve your baked apples as a special dessert, or make them as a fun weekend project!</p> 

    </div>


var first_post =   <div className="post-container" id="firstpost_a">  
    <h1><a id="First_Post" onClick={this.goPost1Clicked}>Fresh Creamed Spinach</a> </h1>
        <time className  = "time-format">
         November 17, 2021
        </time>
        <p>Creamed spinach can go right or wrong, and this creamed spinach recipe is just right. The creaminess comes from cream cheese rather than heavy cream, which offers some delectable tanginess. Fresh baby spinach cooks down in mere minutes, no chopping required, so this recipe is ready in roughly twenty minutes. </p>
        <img src={pic1} alt="best-creamed-spinach-recipe" style={{float:"right",width:200, height:300, padding: 10, outline: 5}}/>
        <p>Creamed spinach will never be the prettiest menu item on your Thanksgiving table, but the verdant color of freshly cooked spinach will liven up otherwise beige plates. The more greens the better, I say.</p>
        <p>I didn’t grow up with creamed spinach at our Thanksgiving suppers. I’ve found it on steakhouse menus while searching for vegetarian options. The name “creamed spinach” doesn’t sound terribly enticing, does it? </p> 
        <p>I wasn’t sold on the general concept until I realized that it’s almost like spinach dip in side dish form. Creamed spinach earned my full attention in that moment. </p> 
        <p>After some trial and error, I’m sharing this recipe because I think it’s worthy of your attention, too. It’s delicious, creamy, comforting and just so nice!</p> 
        <h3>How to Make the Best Creamed Spinach</h3> 
        <p>Creamed spinach is easy to make with basic ingredients, yet the end result tastes like more than the sum of its parts. It’s rich and creamy but not over the top. Here’s why this recipe works so well (keep scrolling for the full recipe):</p> 
        <ol>
        <li>First, sauté mellow yellow onion in butter and simple seasonings—salt, pepper and an optional pinch of cayenne. This step smells amazing and forms the backbone of flavor for this dish.</li> 
        <li>Then, add fresh baby spinach in handfuls, stirring after each. Sometimes I’ll suggest using frozen spinach, but fresh spinach is superior in flavor and texture in this case.</li>
        <li>Once the spinach is wilted, add garlic. We’re adding the garlic later on so it doesn’t have a chance to burn, and we’ll cook it just until it’s fragrant. As always, please use fresh garlic, not store-bought minced garlic.</li>
        <li>Finally, stir in cream cheese until it’s creamy and melted, followed by some Parmesan cheese. Season with salt and pepper until the flavors really sing. You’re done!</li> 
        </ol>
        </div>

var second_post = <div className="post-container" id="second_post_a">  
         <h1>Best Baked Potato </h1>    
         <time className  = "time-format">
             November 8, 2021
            </time>
        <img src={pic2} alt="baked-potato-recipe" style={{float:"right", width:200, height:300, padding: 10, outline: 5}}/>
        <p>Meet the baked potato of my dreams! These baked potatoes are fluffy on the inside and crisp on the outside. They’re exactly the kind of baked potato I’ve been craving. If you share my definition of what a baked potato should be, you could call these potatoes perfect.</p>
        <p>I baked potatoes every which way to arrive at this recipe. I tried various baking temperatures, different crisping methods, and even analyzed how and when to slice open those beautiful baked spuds.</p>
        <p>If you’re accustomed to run-of-the-mill baked potatoes, this might sound like a silly amount of effort. But if you have savored the glorious contrast between crispy potato skin and fluffy potato interior, you know there must be a trick to it. The good news is that baking the perfect potato isn’t complicated when you follow this method. There’s not much better than a piping hot baked potato on a chilly day, so preheat that oven already!</p>
        <h3>How to Bake the Best Potato</h3>
        <p>Russet potatoes are the classic choice for good reason. Russets are high in starch and low in moisture, which makes them nice and fluffy after baking. Their thick skin crisps up well, too.</p>
        <p>Choose medium-sized potatoes, each around the same size (about one-half pound) so they’re all done at the same time. Large potatoes will take absolutely forever to cook through.</p><p>Prick your potatoes with a fork about six to eight times per potato. You don’t have to aggressively stab the potato. Pricks about 1/4-inch deep will do. Without these ventilation holes, potatoes can explode in the oven—don’t let this happen to you!</p>
        <p>Do not wrap your potatoes in aluminum foil. Foil traps moisture, which produces a soggy exterior. We want the excess moisture to escape from the potato during baking. That way, we’ll get crispy outsides and condensed potato flavor on the insides.</p>
        <p>Bake at a relatively high temperature (450 degrees Fahrenheit). This is a trick I learned from America’s Test Kitchen that proved true in my recipe tests. They explain that baking in a hot oven prevents a leather “pellicle” from forming underneath the peel. </p><p>You’ll know the potatoes are cooked through when you can slide a skewer or fork into the center of the potato with little to no resistance. That’s a reliable indicator that your potatoes have reached an internal temperature of 205 degrees Fahrenheit, which is just right. Baking time to reach this point is typically 45 to 60 minutes for medium potatoes. </p>
        <p>For the best baked potato, don’t stop there. Once the potatoes are cooked through, remove them from the oven and brush them lightly all over with melted butter or oil, then sprinkle them with salt. Return the potatoes to the oven on the middle rack for medium-crisp exteriors, or raise the rack by a level or two for ultra crispy exteriors. This step is key to achieving those crispy, flavorful exteriors. It works so well because we’re adding the butter or oil at the end of baking. Add it too early, and it can burn before the potatoes are done. I found that butter produced a nicer flavor and texture, but oil works well if you’re following a dairy-free or vegan diet. Salting the potatoes enhances the flavor of the crust, and the salt only sticks once we’ve brushed the potatoes with butter or oil. </p>
        <p>Bake for 10 more minutes, then slice open promptly to release steam. Serve as desired. You’ll find topping suggestions below.</p>
        </div>

var third_post = <div className="post-container" id="third_post_a">  
        <h1>Perfect Baked Apples </h1>    
        <time className  = "time-format">
             October 19, 2021
            </time>
        <img src={pic3} alt="best-baked-apples-recipe" style={{float:"right",     width:200, height:300, padding: 10, outline: 5}}/>
        <p>Craving something sweet? These baked apples are a delightful dessert featuring seasonal fruit. They taste like an apple crisp but look much cuter.</p>
        <p>This baked apple recipe is all in the technique, but it’s not complicated. I’ll walk you through it below.</p> 
        <p>You’ll need a short list of ingredients to make this recipe—apples, oats, coconut or brown sugar, optional pecans or walnuts, and butter. We’ll add a little bit of cinnamon and salt to take the flavor over the top.</p> 
        <p>Serve these wholesome baked apples with a scoop of vanilla ice cream or creamy yogurt. They’re sweet enough to taste like a treat, but wholesome at the same time. Serve your baked apples as a special dessert, or make them as a fun weekend project!</p> 
        <h3>How to Make Baked Apples</h3> <p>This recipe is actually a fully reworked version of one of my oldest desserts: Individual Pear and Apple Crisps. You’ll find the full recipe below, but are some key elements that make this recipe work:</p> 
        <p>Choose your apples wisely.Honeycrisp and Gala apples worked best in my recipe tests (I also tried Granny Smith and Fuji). If I had to choose, I’d pick Honeycrisp, as shown in these photos. They are substantial in size, full of flavor and vibrant even after baking.</p> 
        <p>Prepare the apples carefully.This baked apple recipe yields beautiful and delicious results, in large part because of how we slice the apples (a trick I found in my trusty America’s Test Kitchen cookbook).</p> <p>Slicing off the tops of the apples gives us easier access to the insides for scooping and provides greater surface area for steam to escape from the apple flesh, reducing the likelihood that the skin will split open. The tops create a micro-environment that helps the apple bake evenly throughout and prevents the filling from becoming too golden. All that, and the apple tops are cute!</p> 
        <p>Add water.Once you’ve nestled the prepared apples into a square baking dish, pour some water into the dish. The water will help steam and soften the apples while they bake, preventing them from drying out.</p>
        </div>
     

  var nav = <nav>
     <li><a id="Home_button" onClick={this.goHomeClicked}>Home Page</a>
     {/* <Link to="/">Home Page</Link> */}
     </li>

      <h3> Bitcoin Price </h3>

       <ul>
        <li>Price in USD is <div className = "price" id="USD">{this.state.bitcoinprice} </div></li>
      </ul> 
     </nav>

      var  r_main = 
            <main id ="content">

            {post1sum}

            {post2sum}

            {post3sum}

            </main>

    if(this.state.whichpage  === 0){
       r_main = 
            <main id ="content">

            {post1sum}

            {post2sum}

            {post3sum}

            </main>

    } else if (this.state.whichpage ===1){
     r_main = <main id ="content">

            {first_post}

            </main>

    } else if ((this.state.whichpage ===2)){
       r_main = <main id ="content">

            {second_post}

            </main>

    } else if ((this.state.whichpage ===3)){
       r_main = <main id ="content">

            {third_post}

            </main>

    }
    return (
        <div>
        {r_main}
        {nav}
        </div>

    );
  }
}


export default Con;
