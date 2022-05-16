import { Row, Card, Col, Button } from 'react-bootstrap';

const Restaurants = () => {

   
  return <div className="cards-container">
   
    
  
    <Card className="card-shadow w-100">
    <Card.Img variant="top" src="https://www.avantsys.ro/wp-content/uploads/2017/02/Rest-Carol.jpg" height="400"/>
    <Card.Body>
      <Card.Text>
        Gaseste restaurantul potrivit pentru tine! Dintr-o suita de localuri, cu preturi pentru toate buzunarele, ai de unde alege!
      </Card.Text>
    </Card.Body>
  </Card>
    <Card className="card-shadow" style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/09/76/9d/ba/casa-domneasca.jpg" />
      <Card.Body>
        <Card.Title>Casa Domneasca</Card.Title>
        <Card.Text>
          Casa Domnească te așteaptă cu un meniu delicios, care îmbină preparate culinare din bucătăria tradițională și internațională, pe care le poți savura într-un ambient nonconformist sau chiar la tine acasă.
        </Card.Text>
        <Button variant="primary">Vezi detalii</Button>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src="https://www.restaurante-braila.ro/modules/view_image.php?image=photos/8226101253450_1569838939846046_5341905208358207488_n.jpg&watermark=1" />
  <Card.Body>
    <Card.Title>La Casa cu Stuf</Card.Title>
    <Card.Text>
      Decorul pur românesc, bucatele savuroase, muzica tradițională, dar și ambianța plină de farmec, sunt tot atâtea motive de a poposi la restaurant "La Casa cu Stuf"
    </Card.Text>
    <Button variant="primary">Vezi detalii</Button>
  </Card.Body>
</Card>
  <br/>
<Card className="card-shadow" style={{ width: '30rem' }}>
  <Card.Img variant="top" src="http://debraila.ro/wp-content/uploads/2020/10/FB_IMG_1603023100622.jpg" />
  <Card.Body>
    <Card.Title>Cabana Stejarilor</Card.Title>
    <Card.Text>
      Gătim cu inspirație din bucătăria internațională păstrând vie tradiția locului, oferind un meniu bogat în care puteți găsi de la preparate tradiționale până la mâncăruri exclusiviste ca: vită argentiniană, berbecuț din Noua Zeelandă și pește rar din ape îndepărtate
    </Card.Text>
    <Button variant="primary">Vezi detalii</Button>
  </Card.Body>
</Card>
<br/>
<Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src="https://www.pestesivin.ro/res/images/ambient/5.jpg" />
  <Card.Body>
    <Card.Title>Peste si Vin</Card.Title>
    <Card.Text>
      Restaurantul Peşte şi vin un brand din dorinţa de a face cunoscut publicului larg, gustul deosebit al preparatelor din peşte alături de un vin deosebit. Atmosfera rustic minimalistă a fost aleasă cu inspiraţie şi grijă pentru a se integra cu meniurile noastre speciale.
    </Card.Text>
    <Button variant="primary">Vezi detalii</Button>
  </Card.Body>
</Card>
<br/>
<Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/08/99/6c/77/restaurant-carol.jpg" />
  <Card.Body>
    <Card.Title>Restaurantul Carol</Card.Title>
    <Card.Text>
    Restaurantul “Carol” este o locatie ce asigura o atmosfera plina de rafinament, bun gust si eleganta, un mix ideal intre vechi si contemporan, traditie si inovatie dar si modernitate. Restaurantul se afla intr-un imobil vechi de circa 150 de ani, localizat in centrul istoric al orasului Braila fiind o locatie high-class care asigura o atmosfera plina de rafinament si eleganta.
    </Card.Text>
    <Button variant="primary">Vezi detalii</Button>
  </Card.Body>
</Card>


  </div>
}

export default Restaurants;