import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const context = `
LISCO Software - Technology At Its Best

COMPANY PROFILE:
Company Name: Lisco Software
Website: https://www.lisco.in/
Domain: lisco.in
Business Type: Technology Startup / Software Development Company
Tagline: Technology At Its Best
Founded: Recently established startup
Team: Small crew of dedicated developers (startup size)
Industry: Software Development, Technology Services, Custom Software Solutions

COMPANY OVERVIEW:
Lisco Software is a technology startup born from a deep passion for technology and a bold vision to create innovative software solutions that simplify, transform, and propel businesses into the digital cosmos. Starting as a small crew of dedicated developers with a stellar dream, we launched our startup to bridge the gap between cutting-edge tech and real-world business challenges. Today, we continue pushing the frontiers of possibility, crafting custom software that drives growth and success across galaxies of industries.

MISSION STATEMENT:
Our mission is to harness the latest software development technologies and methodologies to deliver tailor-made, resilient solutions that adapt and scale with the ever-evolving business landscape. We believe software should be as reliable and dynamic as the universe itself — capable of evolving alongside your ambitions and challenges.

CORE SERVICES:
As a full-stack development command center, we provide end-to-end software engineering designed precisely for your needs. From crafting sleek, intuitive front-end interfaces to managing robust back-end servers, cloud infrastructure, and secure APIs, we deliver seamless, scalable systems across all platforms. Our expertise spans a constellation of technologies, enabling us to build secure, efficient, and future-ready solutions for web, mobile, and enterprise applications.

DEVELOPMENT METHODOLOGY:
At the core of our process lies the Agile methodology — a flexible, collaborative navigation system that adapts to your evolving business universe. Working in iterative sprints, we deliver incremental value, continuously refining and optimizing based on your feedback and vision. Our agile approach empowers rapid innovation, enabling your software to evolve dynamically — keeping you ahead in the fast-moving tech galaxy.

TECHNICAL CAPABILITIES:
• Full-Stack Development (Complete end-to-end solutions)
• Frontend Development (Sleek, intuitive user interfaces)
• Backend Development (Robust, scalable server architecture)
• Cloud Infrastructure (Scalable cloud-based solutions)
• API Development (Secure APIs and integrations)
• Web Applications (Cross-platform web solutions)
• Mobile Applications (Native and cross-platform mobile apps)
• Enterprise Applications (Large-scale enterprise software)
• Custom Software Development (Tailor-made solutions)
• Database Management (Efficient data handling)
• System Architecture (Scalable system design)
• DevOps & Deployment (Continuous integration and deployment)

TECHNOLOGY EXPERTISE:
• Modern Development Frameworks
• Latest Software Development Technologies
• Cross-Platform Development Tools
• Cloud Computing Technologies
• Security Implementation
• Scalable Architecture Design
• Future-Ready Technology Stack
• Constellation of Technologies (Multiple tech stack proficiency)

DEVELOPMENT APPROACH:
• Agile Methodology (Core development framework)
• Iterative Development Sprints
• Incremental Value Delivery
• Continuous Refinement Process
• Client Feedback Integration
• Collaborative Development
• Rapid Innovation Cycles
• Dynamic Software Evolution
• Flexible Navigation System
• Adaptive to Business Changes

COMPANY VALUES & PHILOSOPHY:
• Deep Passion for Technology
• Innovation-Driven Approach
• Bridge Technology & Business Gap
• Custom, Tailor-Made Solutions
• Scalability and Adaptability Focus
• Reliability and Dynamic Solutions
• Client-Focused Development
• Cutting-Edge Technology Integration
• Growth and Success Orientation
• Stellar Vision and Dreams
• Pushing Frontiers of Possibility

TARGET MARKET & INDUSTRIES:
• Digital Transformation Businesses
• Startups Requiring Custom Software
• Enterprises Needing Scalable Solutions
• Organizations Seeking Full-Stack Development
• Small to Large Businesses Across Various Industries
• Companies Looking for Modern Tech Solutions
• Businesses Requiring Cloud Infrastructure
• Organizations Needing API Integration
• Companies Seeking Mobile and Web Applications
• Enterprises Requiring Custom Development

UNIQUE SELLING PROPOSITIONS:
• Space-Themed Branding and Communication
• Small Dedicated Team with Stellar Dreams
• End-to-End Software Engineering
• Constellation of Technology Expertise
• Universe-Inspired Reliability
• Galaxy-Spanning Industry Experience
• Cosmic Approach to Digital Solutions
• Future-Ready Technology Focus
• Dynamic Evolution Capability
• Digital Cosmos Navigation

BUSINESS POSITIONING:
• Technology Startup in Software Development
• Full-Stack Development Command Center
• Bridge Between Cutting-Edge Tech and Business Challenges
• Custom Software Solution Provider
• Agile Development Specialists
• Scalable System Architects
• Future-Ready Solution Creators

CONTACT INFORMATION:
Primary Website: https://www.lisco.in/
Domain: lisco.in
Location:warangal

ADDITIONAL NOTES:
• Recently established startup company
• Growing team of dedicated developers
• Focus on modern, cutting-edge technology
• Strong emphasis on client collaboration
• Commitment to continuous innovation
• Space and universe-themed branding throughout communications
• Emphasis on reliability, scalability, and future-readiness
• Specializes in bridging technology gaps for businesses
• Offers tailor-made solutions for specific business needs

SERVICE DELIVERY MODEL:
• Consultation and Requirement Analysis
• Custom Solution Design
• Agile Development Process
• Iterative Sprint Delivery
• Continuous Client Feedback Integration
• Quality Assurance and Testing
• Deployment and Implementation
• Ongoing Support and Maintenance
• Continuous Optimization and Updates

COMPETITIVE ADVANTAGES:
• Boutique startup approach with personalized service
• Full-stack expertise across multiple platforms
• Agile methodology ensuring flexibility
• Future-ready technology implementation
• Strong focus on scalability and adaptability
• Custom solutions tailored to specific needs
• Rapid innovation and dynamic evolution capability
• Cross-industry experience and expertise
`;

export async function POST(request) {
  try {
  
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    
   
    const { text } = await request.json();
 
    if (!text) {
      return NextResponse.json({
        message: "Add a question",
      }, { status: 400 });
    }

   
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    });

 
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ 
            text: `System context: ${context}

Answer based on the information provided above like pointers. If the question is outside the scope of Lisco Private Limited, simply say "I'm sorry, I can only provide information about Lisco Private Limited." Don't include asterisks in the output"` 
          }],
        },
        {
          role: "model",
          parts: [{ 
            text: "I understand. I'll answer questions only about Techwens Software Private Limited based on the provided context." 
          }],
        },
      ],
    });

    
    const result = await chat.sendMessage(text);
    const response = await result.response;
    const answer = response.text();

   
    return NextResponse.json({
      answer: answer,
    });

  } catch (error) {
    console.error("Error generating response:", error);
    
    return NextResponse.json({
      message: "Error generating response",
      error: error.message,
    }, { status: 500 });
  }
}
