import React from 'react';
import useWindowScroll from './useWindowScroll';

const TIMEOUT_NUM = 1000;

function Component() {
  const [{ x, y }, windowScrollToFn] = useWindowScroll(TIMEOUT_NUM);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          background: 'red',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <h1>
          x: {x} y: {y}
        </h1>
        <button
          type="button"
          onClick={() => windowScrollToFn({ top: 0, behavior: 'smooth' })}
        >
          scroll top
        </button>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt,
        veritatis quo sequi assumenda qui vel quam maiores rem ipsa corporis
        optio sed modi pariatur ullam fugiat harum quisquam expedita, ipsam
        molestias inventore? Non pariatur porro iure, blanditiis cupiditate eum
        alias, fugiat suscipit quam magni facilis nemo, voluptatibus ipsa? Eum
        saepe, in deserunt, nulla libero minima voluptates praesentium nisi
        facilis, expedita mollitia distinctio nesciunt earum! Molestiae totam
        placeat fugiat illo, aliquid tenetur perspiciatis at, reprehenderit quis
        soluta fuga earum deserunt nulla! Sit, inventore in laboriosam omnis
        voluptatibus eaque error alias cupiditate voluptas officia nostrum unde
        maiores numquam. Magni, facere? Temporibus illo, expedita, voluptatibus
        quisquam neque beatae amet reprehenderit vel assumenda, sapiente
        consectetur odio mollitia fugiat repudiandae natus nihil dicta molestias
        exercitationem dolore. Tenetur, consectetur. Totam, voluptatum ipsam
        error reiciendis similique ab eos sed. Inventore ipsam ducimus earum.
        Modi ut, itaque, explicabo asperiores sit nemo architecto facilis cum
        quisquam ad sapiente aspernatur veritatis corrupti commodi. Ut ratione
        ipsum, tempora nihil impedit quidem iusto. Possimus, ipsum. Nisi est et
        ipsa, nemo deleniti commodi. Nulla eaque deserunt et iure unde
        necessitatibus totam ea, vero voluptatum modi illum. Ad quaerat
        quisquam, aut eius quae explicabo laboriosam natus nam tenetur minima,
        cum sapiente doloribus magni distinctio animi illum saepe suscipit quis.
        Ratione doloribus facere dignissimos magnam iusto repudiandae
        consequatur suscipit quisquam harum eaque id a rerum incidunt maiores
        repellat explicabo omnis accusamus voluptatum molestiae fuga, assumenda
        hic et sapiente quod! Repudiandae soluta corporis, dolorem rem ducimus
        dolor ipsa quod excepturi assumenda sequi maiores id neque nulla eum
        incidunt cum provident saepe vitae voluptatum pariatur possimus atque?
        Cum porro ratione odio ipsam veniam deleniti adipisci. Assumenda, natus
        eveniet. Odit, nobis provident dolor non fugit officiis sint ut beatae
        tenetur laborum, voluptates ipsa! Porro enim dignissimos laborum quia
        hic fugiat soluta dolor non, ad aut odit sunt maiores iure modi
        excepturi blanditiis quos dolorum unde? Assumenda unde odit corrupti
        inventore, esse laudantium! Obcaecati dolorum eum sed nesciunt, deserunt
        asperiores repellendus iusto, optio, quis quaerat non aut ad maiores qui
        ipsum id voluptates praesentium officiis quae ipsam enim sint ex
        adipisci! Laboriosam ducimus optio omnis quaerat vel, in sunt totam
        distinctio ratione natus, fugiat placeat, perferendis beatae atque
        maiores nemo saepe facere iste commodi. Quia fugit explicabo
        voluptatibus, enim doloremque excepturi nihil inventore laborum unde ad
        velit ipsam quis possimus est ea maxime ab pariatur? Asperiores nobis
        sapiente voluptatibus magni id tempora! In natus cupiditate, quod optio
        repudiandae voluptates delectus, aliquam ea mollitia corporis numquam
        reprehenderit perspiciatis ex sed non? Provident incidunt pariatur
        consequatur temporibus deserunt obcaecati autem numquam! Recusandae
        officia eum sunt aliquam minima quae, nemo aliquid obcaecati. Ipsum
        architecto vel adipisci velit quis id, facilis reprehenderit debitis ab.
        Eaque eum excepturi nostrum, laudantium facere quam sed officia animi
        adipisci neque quis obcaecati asperiores temporibus deleniti cumque
        debitis eius consequatur iste quo sit amet nihil dolores ducimus quos!
        Iste, autem voluptates reprehenderit nihil commodi nesciunt
        exercitationem soluta beatae ad quis temporibus sapiente ab numquam
        aliquam blanditiis fugiat mollitia magnam asperiores quae dolorem
        doloremque! Laudantium ipsum quas cumque? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo sunt, veritatis quo sequi assumenda
        qui vel quam maiores rem ipsa corporis optio sed modi pariatur ullam
        fugiat harum quisquam expedita, ipsam molestias inventore? Non pariatur
        porro iure, blanditiis cupiditate eum alias, fugiat suscipit quam magni
        facilis nemo, voluptatibus ipsa? Eum saepe, in deserunt, nulla libero
        minima voluptates praesentium nisi facilis, expedita mollitia distinctio
        nesciunt earum! Molestiae totam placeat fugiat illo, aliquid tenetur
        perspiciatis at, reprehenderit quis soluta fuga earum deserunt nulla!
        Sit, inventore in laboriosam omnis voluptatibus eaque error alias
        cupiditate voluptas officia nostrum unde maiores numquam. Magni, facere?
        Temporibus illo, expedita, voluptatibus quisquam neque beatae amet
        reprehenderit vel assumenda, sapiente consectetur odio mollitia fugiat
        repudiandae natus nihil dicta molestias exercitationem dolore. Tenetur,
        consectetur. Totam, voluptatum ipsam error reiciendis similique ab eos
        sed. Inventore ipsam ducimus earum. Modi ut, itaque, explicabo
        asperiores sit nemo architecto facilis cum quisquam ad sapiente
        aspernatur veritatis corrupti commodi. Ut ratione ipsum, tempora nihil
        impedit quidem iusto. Possimus, ipsum. Nisi est et ipsa, nemo deleniti
        commodi. Nulla eaque deserunt et iure unde necessitatibus totam ea, vero
        voluptatum modi illum. Ad quaerat quisquam, aut eius quae explicabo
        laboriosam natus nam tenetur minima, cum sapiente doloribus magni
        distinctio animi illum saepe suscipit quis. Ratione doloribus facere
        dignissimos magnam iusto repudiandae consequatur suscipit quisquam harum
        eaque id a rerum incidunt maiores repellat explicabo omnis accusamus
        voluptatum molestiae fuga, assumenda hic et sapiente quod! Repudiandae
        soluta corporis, dolorem rem ducimus dolor ipsa quod excepturi assumenda
        sequi maiores id neque nulla eum incidunt cum provident saepe vitae
        voluptatum pariatur possimus atque? Cum porro ratione odio ipsam veniam
        deleniti adipisci. Assumenda, natus eveniet. Odit, nobis provident dolor
        non fugit officiis sint ut beatae tenetur laborum, voluptates ipsa!
        Porro enim dignissimos laborum quia hic fugiat soluta dolor non, ad aut
        odit sunt maiores iure modi excepturi blanditiis quos dolorum unde?
        Assumenda unde odit corrupti inventore, esse laudantium! Obcaecati
        dolorum eum sed nesciunt, deserunt asperiores repellendus iusto, optio,
        quis quaerat non aut ad maiores qui ipsum id voluptates praesentium
        officiis quae ipsam enim sint ex adipisci! Laboriosam ducimus optio
        omnis quaerat vel, in sunt totam distinctio ratione natus, fugiat
        placeat, perferendis beatae atque maiores nemo saepe facere iste
        commodi. Quia fugit explicabo voluptatibus, enim doloremque excepturi
        nihil inventore laborum unde ad velit ipsam quis possimus est ea maxime
        ab pariatur? Asperiores nobis sapiente voluptatibus magni id tempora! In
        natus cupiditate, quod optio repudiandae voluptates delectus, aliquam ea
        mollitia corporis numquam reprehenderit perspiciatis ex sed non?
        Provident incidunt pariatur consequatur temporibus deserunt obcaecati
        autem numquam! Recusandae officia eum sunt aliquam minima quae, nemo
        aliquid obcaecati. Ipsum architecto vel adipisci velit quis id, facilis
        reprehenderit debitis ab. Eaque eum excepturi nostrum, laudantium facere
        quam sed officia animi adipisci neque quis obcaecati asperiores
        temporibus deleniti cumque debitis eius consequatur iste quo sit amet
        nihil dolores ducimus quos! Iste, autem voluptates reprehenderit nihil
        commodi nesciunt exercitationem soluta beatae ad quis temporibus
        sapiente ab numquam aliquam blanditiis fugiat mollitia magnam asperiores
        quae dolorem doloremque! Laudantium ipsum quas cumque?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt,
        veritatis quo sequi assumenda qui vel quam maiores rem ipsa corporis
        optio sed modi pariatur ullam fugiat harum quisquam expedita, ipsam
        molestias inventore? Non pariatur porro iure, blanditiis cupiditate eum
        alias, fugiat suscipit quam magni facilis nemo, voluptatibus ipsa? Eum
        saepe, in deserunt, nulla libero minima voluptates praesentium nisi
        facilis, expedita mollitia distinctio nesciunt earum! Molestiae totam
        placeat fugiat illo, aliquid tenetur perspiciatis at, reprehenderit quis
        soluta fuga earum deserunt nulla! Sit, inventore in laboriosam omnis
        voluptatibus eaque error alias cupiditate voluptas officia nostrum unde
        maiores numquam. Magni, facere? Temporibus illo, expedita, voluptatibus
        quisquam neque beatae amet reprehenderit vel assumenda, sapiente
        consectetur odio mollitia fugiat repudiandae natus nihil dicta molestias
        exercitationem dolore. Tenetur, consectetur. Totam, voluptatum ipsam
        error reiciendis similique ab eos sed. Inventore ipsam ducimus earum.
        Modi ut, itaque, explicabo asperiores sit nemo architecto facilis cum
        quisquam ad sapiente aspernatur veritatis corrupti commodi. Ut ratione
        ipsum, tempora nihil impedit quidem iusto. Possimus, ipsum. Nisi est et
        ipsa, nemo deleniti commodi. Nulla eaque deserunt et iure unde
        necessitatibus totam ea, vero voluptatum modi illum. Ad quaerat
        quisquam, aut eius quae explicabo laboriosam natus nam tenetur minima,
        cum sapiente doloribus magni distinctio animi illum saepe suscipit quis.
        Ratione doloribus facere dignissimos magnam iusto repudiandae
        consequatur suscipit quisquam harum eaque id a rerum incidunt maiores
        repellat explicabo omnis accusamus voluptatum molestiae fuga, assumenda
        hic et sapiente quod! Repudiandae soluta corporis, dolorem rem ducimus
        dolor ipsa quod excepturi assumenda sequi maiores id neque nulla eum
        incidunt cum provident saepe vitae voluptatum pariatur possimus atque?
        Cum porro ratione odio ipsam veniam deleniti adipisci. Assumenda, natus
        eveniet. Odit, nobis provident dolor non fugit officiis sint ut beatae
        tenetur laborum, voluptates ipsa! Porro enim dignissimos laborum quia
        hic fugiat soluta dolor non, ad aut odit sunt maiores iure modi
        excepturi blanditiis quos dolorum unde? Assumenda unde odit corrupti
        inventore, esse laudantium! Obcaecati dolorum eum sed nesciunt, deserunt
        asperiores repellendus iusto, optio, quis quaerat non aut ad maiores qui
        ipsum id voluptates praesentium officiis quae ipsam enim sint ex
        adipisci! Laboriosam ducimus optio omnis quaerat vel, in sunt totam
        distinctio ratione natus, fugiat placeat, perferendis beatae atque
        maiores nemo saepe facere iste commodi. Quia fugit explicabo
        voluptatibus, enim doloremque excepturi nihil inventore laborum unde ad
        velit ipsam quis possimus est ea maxime ab pariatur? Asperiores nobis
        sapiente voluptatibus magni id tempora! In natus cupiditate, quod optio
        repudiandae voluptates delectus, aliquam ea mollitia corporis numquam
        reprehenderit perspiciatis ex sed non? Provident incidunt pariatur
        consequatur temporibus deserunt obcaecati autem numquam! Recusandae
        officia eum sunt aliquam minima quae, nemo aliquid obcaecati. Ipsum
        architecto vel adipisci velit quis id, facilis reprehenderit debitis ab.
        Eaque eum excepturi nostrum, laudantium facere quam sed officia animi
        adipisci neque quis obcaecati asperiores temporibus deleniti cumque
        debitis eius consequatur iste quo sit amet nihil dolores ducimus quos!
        Iste, autem voluptates reprehenderit nihil commodi nesciunt
        exercitationem soluta beatae ad quis temporibus sapiente ab numquam
        aliquam blanditiis fugiat mollitia magnam asperiores quae dolorem
        doloremque! Laudantium ipsum quas cumque? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo sunt, veritatis quo sequi assumenda
        qui vel quam maiores rem ipsa corporis optio sed modi pariatur ullam
        fugiat harum quisquam expedita, ipsam molestias inventore? Non pariatur
        porro iure, blanditiis cupiditate eum alias, fugiat suscipit quam magni
        facilis nemo, voluptatibus ipsa? Eum saepe, in deserunt, nulla libero
        minima voluptates praesentium nisi facilis, expedita mollitia distinctio
        nesciunt earum! Molestiae totam placeat fugiat illo, aliquid tenetur
        perspiciatis at, reprehenderit quis soluta fuga earum deserunt nulla!
        Sit, inventore in laboriosam omnis voluptatibus eaque error alias
        cupiditate voluptas officia nostrum unde maiores numquam. Magni, facere?
        Temporibus illo, expedita, voluptatibus quisquam neque beatae amet
        reprehenderit vel assumenda, sapiente consectetur odio mollitia fugiat
        repudiandae natus nihil dicta molestias exercitationem dolore. Tenetur,
        consectetur. Totam, voluptatum ipsam error reiciendis similique ab eos
        sed. Inventore ipsam ducimus earum. Modi ut, itaque, explicabo
        asperiores sit nemo architecto facilis cum quisquam ad sapiente
        aspernatur veritatis corrupti commodi. Ut ratione ipsum, tempora nihil
        impedit quidem iusto. Possimus, ipsum. Nisi est et ipsa, nemo deleniti
        commodi. Nulla eaque deserunt et iure unde necessitatibus totam ea, vero
        voluptatum modi illum. Ad quaerat quisquam, aut eius quae explicabo
        laboriosam natus nam tenetur minima, cum sapiente doloribus magni
        distinctio animi illum saepe suscipit quis. Ratione doloribus facere
        dignissimos magnam iusto repudiandae consequatur suscipit quisquam harum
        eaque id a rerum incidunt maiores repellat explicabo omnis accusamus
        voluptatum molestiae fuga, assumenda hic et sapiente quod! Repudiandae
        soluta corporis, dolorem rem ducimus dolor ipsa quod excepturi assumenda
        sequi maiores id neque nulla eum incidunt cum provident saepe vitae
        voluptatum pariatur possimus atque? Cum porro ratione odio ipsam veniam
        deleniti adipisci. Assumenda, natus eveniet. Odit, nobis provident dolor
        non fugit officiis sint ut beatae tenetur laborum, voluptates ipsa!
        Porro enim dignissimos laborum quia hic fugiat soluta dolor non, ad aut
        odit sunt maiores iure modi excepturi blanditiis quos dolorum unde?
        Assumenda unde odit corrupti inventore, esse laudantium! Obcaecati
        dolorum eum sed nesciunt, deserunt asperiores repellendus iusto, optio,
        quis quaerat non aut ad maiores qui ipsum id voluptates praesentium
        officiis quae ipsam enim sint ex adipisci! Laboriosam ducimus optio
        omnis quaerat vel, in sunt totam distinctio ratione natus, fugiat
        placeat, perferendis beatae atque maiores nemo saepe facere iste
        commodi. Quia fugit explicabo voluptatibus, enim doloremque excepturi
        nihil inventore laborum unde ad velit ipsam quis possimus est ea maxime
        ab pariatur? Asperiores nobis sapiente voluptatibus magni id tempora! In
        natus cupiditate, quod optio repudiandae voluptates delectus, aliquam ea
        mollitia corporis numquam reprehenderit perspiciatis ex sed non?
        Provident incidunt pariatur consequatur temporibus deserunt obcaecati
        autem numquam! Recusandae officia eum sunt aliquam minima quae, nemo
        aliquid obcaecati. Ipsum architecto vel adipisci velit quis id, facilis
        reprehenderit debitis ab. Eaque eum excepturi nostrum, laudantium facere
        quam sed officia animi adipisci neque quis obcaecati asperiores
        temporibus deleniti cumque debitis eius consequatur iste quo sit amet
        nihil dolores ducimus quos! Iste, autem voluptates reprehenderit nihil
        commodi nesciunt exercitationem soluta beatae ad quis temporibus
        sapiente ab numquam aliquam blanditiis fugiat mollitia magnam asperiores
        quae dolorem doloremque! Laudantium ipsum quas cumque?
      </p>
    </>
  );
}

export default Component;
