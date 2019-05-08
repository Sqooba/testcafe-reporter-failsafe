export default function () {
    return {
        failed: 0,

        reportTaskStart (startTime, userAgents, testCount) {
            this.write('<?xml version="1.0" encoding="UTF-8"?>');
            this.write(`<failsafe-summary result="${testCount}" timeout="false">`);
        },

        reportFixtureStart (/*name*/) {
            // Nothing
        },

        reportTestDone (name, testRunInfo) {
            if (testRunInfo.errs.length)
                this.failed = this.failed + 1;
        },

        reportTaskDone (endTime, passed) {
            this.write(`<completed>${passed}</completed>`);
            this.write(`<errors>${this.failed}</errors>`);
            this.write('<skipped>0</skipped>');
            this.write('<failures>0</failures>');

            this.write('<failureMessage/>');
            this.write('</failsafe-summary>\n');
        }
    };
}
