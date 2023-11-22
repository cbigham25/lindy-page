import React, { Component } from "react";
import lindyPic from "./assets/lindy-bio.png"


class About extends Component {
    render() {
        return (
            <div className="test">
                <div>
                    <img src={lindyPic} alt="Image of author" className="author-image" />
                </div>
                <div>
                    <p className="author-bio">M. J. Lindemann is the author of an upcoming epic fantasy trilogy. He lives with his husband and two dogs in Minnesota. In addition to writing, he works as a public health nurse, helping to connect people to home services.

                        When he’s not spending every moment of his free time writing, he plays video games, watches an unholy amount of T.V., plays D&D, and reads (of course). His favorite genres are science fiction and fantasy, but he’ll dive into anything that’s a good story.

                        What you’ll find in his writing: Found family. Rich worlds. Diverse casts of characters. Heartwarming moments. Tragedy and hope.

                        What you won’t find: Sexual assault of any kind. Racism. Sexism. Homophobia or transphobia.</p>

                </div>
            </div>
        );
    }
}

export default About;