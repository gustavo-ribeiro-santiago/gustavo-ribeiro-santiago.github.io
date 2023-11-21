var jsdom = require('jsdom');
var { JSDOM } = jsdom;
var fs = require('fs');

/* should contain button to access project's repository on GitHub on project's card on projects page; should contain photo of project on projects page; should contain filter buttons on projects page; should contain project title and project description on project's card on projects page */

describe('test homepage features', () => {
  const index = fs.readFileSync('index.html', 'utf-8');
  const dom = new JSDOM(index);
  it('should contain navbar', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('navbar');
    expect(targetElement).not.toBeNull();}, 1000)
  });
  it('should contain greeting prompt on homepage', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('greeting');
    expect(targetElement.textContent).toBe('Hi, I am Gustavo Ribeiro Santiago.');}, 1000)
  });
  it('should contain introduction video on homepage', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('introVideo');
    expect(targetElement).not.toBeNull();}, 1000)
  });
  it('should contain bio on homepage', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('bio');
    expect(targetElement).not.toBeNull();}, 1000)
  });
  it('should contain contact information on homepage', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('contactInfo');
    expect(targetElement).not.toBeNull();}, 1000)
  });
  it('should contain button to "view developed projects" on homepage', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('viewProjects');
    expect(targetElement).not.toBeNull();}, 1000)
  });
});

describe('test projects page features', () => {
  const projects = fs.readFileSync('projects.html', 'utf-8');
  const dom = new JSDOM(projects);
  it('should contain navbar', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('navbar');
    expect(targetElement).not.toBeNull();}, 1000)
  });
  it('should contain button to access website on projects card', () => {
    setTimeout(() => {const targetElement = dom.window.document.getElementById('navbar');
    expect(targetElement).not.toBeNull();}, 1000)
  });
});