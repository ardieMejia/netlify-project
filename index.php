<?php
include("includes/test1.php");
?>

<!DOCTYPE html>
<html lang="en"> 
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My app</title>
        <script
			      src="https://code.jquery.com/jquery-3.4.1.js"
			      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
			      crossorigin="anonymous"></script>
        <script type="text/javascript" src="./javascript/my-first.js"></script>
        <link rel="stylesheet" type="text/css" href="./css/my-styles.css">
       
		    



    </head>
    <body>
        

        <nav>
            <ul>
                <li class="sub-menu-parent" tab-index="0">
                    <a href="http://google.com">Home</a>
                    <div class="space"></div>
                    <ul class="sub-menu">
                        <!--  
                        <li class="space"><a></a></li> empty space hack 
                        <li><a href="#">Sub Item 1</a></li>
                        <li><a href="#">Sub Item 2</a></li>
                        <li><a href="#">Sub Item 3</a></li>
                        <li><a href="#">Sub Item 4</a></li>
                        -->
                    </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                    <a href="#">Image Gallery</a>
                    <ul class="sub-menu">
                        <li class="space"><a></a></li> <!-- empty space hack -->
                        <li><a href="#">Search</a></li>
                        <li><a href="#">My handmade tools</a></li>
                        <li><a href="#">Other woodworkers</a></li>
                        <li><a href="#">Wishlist</a></li>
                    </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                    <a href="#">Information</a>
                    <div class="space"></div>
                    <ul class="sub-menu">
                        <li class="space"><a></a></li> <!-- empty space hack -->
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul></li>
            </ul>
        </nav>



<div class="row">
<div class="column">
        <div class="card">
            
            <div class="container">
                <h4><b>
                    <?php
                    article_title_1();
                    ?>
                </b></h4>


                <p>
                    <?php

                    article_content_1();
                    ?>

                </p>


            </div>

            <div class="img-container">


                    <img src="./images/<?php echo article_image_1(); ?>" alt="tenon saw" style="width:50%">
            </div>

        </div>
</div>

<div class="column">
        <div class="card">
            
            <div class="container">
                <h4><b>
                    <?php
                    article_title_2();
                    ?>
                </b></h4> 
                <p>
                    <?php
                    article_content_2();
                    ?>
                </p> 
            </div>
    <div class="img-container">
    <img src="./images/<?php echo article_image_2(); ?>" alt="tenon saw" style="width:50%">
            </div>

        </div>
</div>

<div class="column">
    <div class="card">
        
        <div class="container">
            <h4><b>
                <?php
                article_title_3();
                ?>
            </b></h4> 
            <p>
                <?php
                article_content_3();
                ?>
            </p> 
        </div>
        <div class="img-container">
            <img src="./images/<?php echo article_image_3(); ?>" alt="tenon saw" style="width:50%">
        </div>

    </div>
</div>
<div class="column">
    <div class="card">
        
        <div class="container">
            <h4><b>My First Moxon Vise</b></h4> 
            <p>
This is my first moxon vise. This project turns out better than I expected, and pretty good for a first moxon vise build. Now that Im using constantly, it needs to be lined with leather as the wood flexes a bit much. Im guessing the wooden jaw doesnt have enough mass. The jaw is also too low that my plane would almost hit the screw handle. The leather will probably make it last longer as well, though im guessing this vise as of now, will certainly last more than 1 year of constant use. Overall, Im happy with this one, and certainly an improvement over my current work area.
            </p> 
        </div>
        <div class="img-container">
            <img src="./images/my-first-moxon-vise.jpg" alt="tenon saw" style="width:50%">
        </div>

    </div>
</div>

</div>
<div class="row">
    <div class="column">
        <div class="card">
            
            <div class="container">
                <h4><b>Failed Tenon Saw</b></h4> 
                <p>
                    This is my failed tenon saw. It was my first ever attempt at making a tenon saw with a brass back. The real devil that defeated this project was the brass back. Steel bending is not a joke, it is a skill my itself. At the time of making this, I dremeled a rough groove with no jig to guide me, and bent it following a Youtube guide online, where the guy hammered a steel held in a vise to bend it. Ther result was quite ugly, and not straight. Bending it was also not easy, despite dremeling to almost 1/8 " thickness. If I would redo this, I would spend time making a proper dremel guiding jig, heating the brass to a high temperature, to make it softer.
                </p> 
            </div>
            <div class="img-container">
                <img src="./images/failed-tenon-saw.jpg" alt="tenon saw" style="width:50%">
            </div>

        </div>
    </div>

    <div class="column">
        <div class="card">
            
            <div class="container">
                <h4><b>Failed Tenon Saw</b></h4> 
                <p>
                    This is my failed tenon saw. It was my first ever attempt at making a tenon saw with a brass back. The real devil that defeated this project was the brass back. Steel bending is not a joke, it is a skill my itself. At the time of making this, I dremeled a rough groove with no jig to guide me, and bent it following a Youtube guide online, where the guy hammered a steel held in a vise to bend it. Ther result was quite ugly, and not straight. Bending it was also not easy, despite dremeling to almost 1/8 " thickness. If I would redo this, I would spend time making a proper dremel guiding jig, heating the brass to a high temperature, to make it softer.  
                </p> 
            </div>
            <div class="img-container">
                <img src="./images/failed-tenon-saw.jpg" alt="tenon saw" style="width:50%">
            </div>

        </div>
    </div>

    <div class="column">
        <div class="card">
            
            <div class="container">
                <h4><b>Failed Tenon Saw</b></h4> 
                <p>
                    This is a photo of a plane I took from somewhere. This is not my own plane. The image also happens to be a wallpaper size. And the content is shorter, since I have no clue what to say about this particular one.
                </p> 
            </div>
            <div class="img-container">
                <img src="./images/test.jpg" alt="tenon saw" style="width:50%">
            </div>

        </div>
    </div>

</div>
    </body> 
</html>

</html>





