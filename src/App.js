import React from "react";
import { Container } from "semantic-ui-react";
import ContactView from "./views/contact-view";

export default function App() {
    return (
        <div style={{ padding: 20 }}>
            <Container>
                <h1>React Hooks - Context API</h1>
                <ContactView />
            </Container>
        </div>
    );
}
