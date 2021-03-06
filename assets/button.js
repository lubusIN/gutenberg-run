// Add button on page load.
document.addEventListener( 'DOMContentLoaded', () => {
    const actionBar = document.querySelector('.gh-header-actions');

    const pullrequestURL = window.location.href;
    const pullrequestId = pullrequestURL.substr(pullrequestURL.lastIndexOf('/') + 1);

    const btnGutenbergRun = `
        <a 
            class="btn btn-primary ml-1 btn-gutenberg-run" 
            role="button" 
            data-hotkey="r" 
            href="http://gutenberg.run/${pullrequestId}" 
            target="_new">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                    <path d="M146.7 53.3c-2.5-1.7-5.9-1-7.6 1.5-9.9 14.9-30.9 15.7-32 15.7h-.5c-25.9 0-35.8 22.1-36.2 23-1.2 2.8.1 6 2.8 7.2.7.3 1.5.5 2.2.5 2.1 0 4.1-1.2 5-3.3.1-.2 6.9-15.4 24.4-16.4v28.3c-.7 6.1-3.6 10.9-8.7 14.5-5.3 3.7-12.4 5.6-21.1 5.6-10.4 0-18.9-3.6-25.2-10.7-6.4-7.1-9.6-17.2-9.6-30.2l.1-31.2c.5-11.5 3.6-20.6 9.5-27.1C56.2 23.6 64.6 20 75 20c8.7 0 15.8 1.9 21.1 5.6 5.3 3.7 8.3 8.8 8.8 15.4v.7c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9V41c-1-9.9-5.5-17.7-13.6-23.6-8.1-5.9-18.2-8.8-30.4-8.8-14.5 0-26.2 4.8-35.1 14.3-8.4 8.9-12.8 20.6-13.3 35 0 1-.1 2-.1 3l.1 28.1h-.1c0 15.9 4.5 28.6 13.4 38.1s20.6 14.3 35.1 14.3c12.2 0 22.3-2.9 30.4-8.8 7.4-5.4 11.8-12.5 13.3-21.3l.3-31.4c9.1-2.2 21.5-7.2 29.3-19 2-2.5 1.3-5.9-1.3-7.6z"/>
                </svg>
                Run
        </a>
    `;

    actionBar.insertAdjacentHTML('beforeend', btnGutenbergRun);
} );
