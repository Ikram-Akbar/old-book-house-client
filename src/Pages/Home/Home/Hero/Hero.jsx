import Carousel from 'react-bootstrap/Carousel';


const carouselItems = [
    {
        imgUrl: 'https://i.ibb.co/nwQTggH/aman-upadhyay-JAgok-V30k-Gk-unsplash.jpg',
        label: 'Discover Rare Books',
        description: 'Explore our collection of rare and antique books from around the world.',
    },
    {
        imgUrl: 'https://i.ibb.co/4mG6t4L/ionela-mat-YKe-I255r5-MQ-unsplash.jpg',
        label: 'Vintage Collection',
        description: 'Find vintage editions that take you back in time to classic literature.',
    },
    {
        imgUrl: 'https://i.ibb.co/tqLv8Jr/jilbert-ebrahimi-HAw-A1-N2gjo8-unsplash.jpg',
        label: 'Timeless Classics',
        description: 'Read timeless classics that have shaped literature through the centuries.',
    },
    {
        imgUrl: 'https://i.ibb.co/0M3xfqD/lina-a-3-Gacb2-IYr-Ak-unsplash.jpg',
        label: 'Books with History',
        description: 'Each book in our collection has a unique story and a rich history.',
    },
    {
        imgUrl: 'https://i.ibb.co/pwMdbLL/nick-fewings-co-uk-NRLto-Q-unsplash.jpg',
        label: 'Curated for Collectors',
        description: 'Specially curated collections for the true book collector.',
    },
    {
        imgUrl: 'https://i.ibb.co/nDzYMQV/nick-fewings-KUCy-Ztj-Kqw-A-unsplash.jpg',
        label: 'A Journey Through Pages',
        description: 'Embark on a literary journey with our diverse range of books.',
    },
];

const Hero = () => {
    return (
        <Carousel  fade>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.imgUrl}
                        alt={item.label}
                        style={{ maxHeight: '500px', objectFit: 'cover', filter: 'brightness(0.9)' }} 
                    />
                    <Carousel.Caption >
                        <h3 style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: 'bold' }}>{item.label}</h3>
                        <p style={{ color: '#FFF', fontSize: '1.2rem', textShadow: '1px 1px 2px #FFD700' }}>
                            {item.description}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Hero;
