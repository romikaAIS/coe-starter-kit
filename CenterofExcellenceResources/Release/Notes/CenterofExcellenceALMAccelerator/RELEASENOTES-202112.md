## Issues and new features in this release:

https://github.com/microsoft/coe-starter-kit/milestone/13?closed=1

## First Time Setup Instructions
Get started with the CoE ALM Accelerator Setup: https://docs.microsoft.com/en-us/power-platform/guidance/coe/setup-almacceleratorpowerplatform-cli

## Upgrade Instructions
If you are upgrading to the latest public preview you will need to perform the following steps. NOTE: We've changed the internal name of the AA4AM Solution in this release. As a result you will need to delete the existing solution which will cause your App Settings to reset and you'll need to reconfigure.

- Delete the Existing managed solution with the schema name ALMAcceleratorForAdvancedMakers
- Import the latest ALM Accelerator for Power Platform Solution https://github.com/microsoft/coe-starter-kit/releases/download/ALMAcceleratorForAdvancedMakers-1.0.20210521.1/ALMAcceleratorForAdvancedMakers_1.0.20210521.1_managed.zip
- Update your pipeline templates repo with the latest from https://github.com/microsoft/coe-alm-accelerator-templates
- Update Custom Connector Authentication https://github.com/microsoft/coe-starter-kit/blob/ALMAcceleratorForAdvancedMakers/ALMAcceleratorForAdvancedMakers/SETUPGUIDE.md#configure-the-azure-devops-custom-connector
