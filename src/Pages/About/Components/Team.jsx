import React from 'react'

function Team(staff) {

    console.log (staff)

     


  return (
    <>
      {!staff ? (
        <p>loading</p>
      ) : (
        <>
          {staff.map((member, i) => (
            <div class="ameli">
              <h3>Amélie, fondatrice de Cup of Tea</h3>
              {/* <img class="imgLeft" src="img/amelie.jpg" alt="Amelie"> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                corporis voluptas sed similique consectetur ipsam, blanditiis
                unde exercitationem odit porro necessitatibus debitis
                repudiandae quas reprehenderit aliquid maiores illum voluptates
                minima modi repellendus quasi placeat amet. Aliquid quas placeat
                ad dolorem qui itaque pariatur minima. Eligendi, reiciendis
                molestiae? Dolorum, repellat dolores? A est temporibus esse quod
                repellat cumque, sed cupiditate! Mollitia.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis sed in dolorem itaque quasi animi blanditiis. Atque
                quas saepe sapiente, numquam sequi odio, tempora qui eos dolor
                voluptas consectetur accusantium repudiandae delectus. Eius
                doloribus numquam praesentium repellat magni maxime quis minima
                quia omnis in deserunt vitae accusantium architecto debitis
                dolorum cumque nulla ut, minus beatae provident incidunt soluta
                hic! Temporibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                repellat laboriosam dolor distinctio illum repellendus! Dolorem
                culpa nulla optio hic soluta voluptas dolore porro delectus eum
                cupiditate recusandae aut voluptatibus tenetur officia ullam
                debitis, corrupti provident ducimus blanditiis ut eaque
                molestias laborum fuga? Eligendi sed illum quod provident,
                accusamus magnam pariatur consequatur, quaerat odit officia sunt
                amet cupiditate culpa blanditiis.
              </p>
              <div class="clear"></div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Team