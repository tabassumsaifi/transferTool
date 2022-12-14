export const openConfigWindow = (data) => {
   // alert(JSON.stringify(data))
    // Must open window from user interaction code otherwise it is likely
    // to be blocked by a popup blocker:
    const configWindow = window.open(
        undefined,
        '_blank',
        'width=600,height=700,scrollbars=no',
    );

    // Listen to popup messages
    let configFinished = false;
    const onmessage = e => {
        console.log('message', e.data.type, e.data);

        if (e.data.type === 'tray.configPopup.error') {
            // Handle popup error message
            alert(`Error: ${e.data.err}`);
            configWindow.close();
        }
        if (e.data.type === 'tray.configPopup.cancel') {
            configWindow.close();
        }
        if (e.data.type === 'tray.configPopup.finish') {
            // Handle popup finish message
            configFinished = true;
            configWindow.close();
        }
        if (e.data.type === 'tray.configPopup.validate') {
            // Return validation in progress
            configWindow.postMessage({
                type: 'tray.configPopup.client.validation',
                data: {
                    inProgress: true,
                }
            }, '*');

            setTimeout(() => {
                    // Add errors to all inputs
                    const errors = e.data.data.visibleValues.reduce(
                        (errors, externalId) => {
                            console.log(`Visible ${externalId} value:`, e.data.data.configValues[externalId]);
                            // Uncomment next line to set an error message
                            // errors[externalId] = 'Custom error message';
                            return errors;
                        },
                        {}
                    );

                    // Return validation
                    configWindow.postMessage({
                        type: 'tray.configPopup.client.validation',
                        data: {
                            inProgress: false,
                            errors: errors,
                        }
                    }, '*');
                },
                2000
            );
        }
    };
    window.addEventListener('message', onmessage);

    // Check if popup window has been closed before finishing the configuration.
    // We use a polling function due to the fact that some browsers may not
    // display prompts created in the beforeunload event handler.
    const CHECK_TIMEOUT = 1000;
    const checkWindow = () => {
        console.log(configWindow.closed)
        if (configWindow.closed) {
            // Handle popup closing
            if (!configFinished) {
               //alert(JSON.stringify(data));              
                data.disp(data.action, 'Configuration not finished', '400', true)
                setTimeout(() => {
                    data.redirection();
                    data.setTabValue();
                    data.migrationProgressBar();
                 }, 2000);
               
                
                
            } else {
                // alert(
                //     'Configuration finished. You can enable the new ' +
                //     'solution instance from the "Solutions > My Instances" section'
                // );
                data.disp(data.action, 'Configuration finished. You can enable the new', '200', true)
                data.redirection();
                data.setTabValue();
                data.migrationProgressBar();
                console.log('Configuration finished');
            }
            window.removeEventListener('message', onmessage);
        } else {
            setTimeout(checkWindow, CHECK_TIMEOUT);
        }
    }

    checkWindow();

    return configWindow;
};
