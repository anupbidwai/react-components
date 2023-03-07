import Accordion from 'react-bootstrap/Accordion';

const defaultAccourdionItems = [
    {
        id: 1,
        header: "What Morilee has to offer & our wedding dresses",
        body: `Eum pinguem eodem ornare dui massa odio est orci merito-saepius fit and 
        flares at cras-ea-satisfacti W-nisi possit; A-line V-rcpublica ut machinationis quia eodem; 
        fraterne eos vicinarum si fortuna iste long sleeves. Sit ut quo primum sem inmcem nam fuga ut esse ita similitudines, ad paucitate.`
    },
    {
        id: 2,
        header: "I want to try on Morilee's wedding dresses. How do I do that?",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
    }
];

const ReactAccordion = (props) => {
    const { accordionItems = defaultAccourdionItems } = props;
    return (
        <div className='react-accourdion'>
            <Accordion>
                {
                    accordionItems.map((ai, index) => (
                        <Accordion.Item eventKey={index} key={ai.id}>
                            <Accordion.Header>{ai.header}</Accordion.Header>
                            <Accordion.Body>{ai.body}</Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>
    )
};
export default ReactAccordion;
