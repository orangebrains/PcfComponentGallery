import * as React from 'react';
import { CompoundButton, ButtonProps, webLightTheme, FluentProvider } from '@fluentui/react-components';
import { ClipboardTaskListLtrRegular, ChatMailRegular, PeopleCommunityRegular, PhoneShakeRegular, MailAlertRegular, FaxRegular } from '@fluentui/react-icons';

import { IInputs } from "./generated/ManifestTypes";

export interface SmartButtonProps {
  _context: ComponentFramework.Context<IInputs>;
  onTask: () => void;
  onEmail: () => void;
  onAppointment: () => void;
  onPhoneCall: () => void;
  onLetter: () => void;
  onFax: () => void;
}

export class SmartButton extends React.Component<SmartButtonProps> {
  public render(): React.ReactNode {
    // Get properties per activity
    const Task = CompoundButtonPropertiesBuilder(this.props._context.parameters.TaskButtonAppearance.raw.valueOf(), this.props._context.parameters.TaskButtonStyle.raw.valueOf(), this.props._context.parameters.DisplayTaskQuickButton.raw.valueOf());
    const Email = CompoundButtonPropertiesBuilder(this.props._context.parameters.EmailButtonAppearance.raw.valueOf(), this.props._context.parameters.EmailButtonStyle.raw.valueOf(), this.props._context.parameters.DisplayEmailQuickButton.raw.valueOf());
    const Appointment = CompoundButtonPropertiesBuilder(this.props._context.parameters.AppointmentButtonAppearance.raw.valueOf(), this.props._context.parameters.AppointmentButtonStyle.raw.valueOf(), this.props._context.parameters.DisplayAppointmentQuickButton.raw.valueOf());
    const PhoneCall = CompoundButtonPropertiesBuilder(this.props._context.parameters.PhoneCallButtonAppearance.raw.valueOf(), this.props._context.parameters.PhoneCallButtonStyle.raw.valueOf(), this.props._context.parameters.DisplayPhoneCallQuickButton.raw.valueOf());
    const Letter = CompoundButtonPropertiesBuilder(this.props._context.parameters.LetterButtonAppearance.raw.valueOf(), this.props._context.parameters.LetterButtonStyle.raw.valueOf(), this.props._context.parameters.DisplayLetterQuickButton.raw.valueOf());
    const Fax = CompoundButtonPropertiesBuilder(this.props._context.parameters.FaxButtonAppearance.raw.valueOf(), this.props._context.parameters.FaxButtonStyle.raw.valueOf(), this.props._context.parameters.DisplayFaxQuickButton.raw.valueOf());

    //Create Button per activity
    return (
      <FluentProvider theme={webLightTheme}>
        {Email.visible ? (
          <CompoundButton
            onClick={this.props.onEmail}
            appearance={Email.appearance}
            shape={Email.shape}
            style={{ margin: '10px' }}
            icon={<ChatMailRegular />}
            secondaryContent="to this record"
            {...this.props}
          >
            Send an Email
          </CompoundButton>
        ) : null}

        {PhoneCall.visible ? (
          <CompoundButton
            onClick={this.props.onPhoneCall}
            appearance={PhoneCall.appearance}
            shape={PhoneCall.shape}
            style={{ margin: '10px' }}
            icon={<PhoneShakeRegular />}
            secondaryContent="on this record"
            {...this.props}
          >
            Register Call
          </CompoundButton>
        ) : null}

        {Task.visible ? (
          <CompoundButton
            onClick={this.props.onTask}
            appearance={Task.appearance}
            shape={Task.shape}
            style={{ margin: '10px' }}
            icon={<ClipboardTaskListLtrRegular />}
            secondaryContent="for this record"
            {...this.props}
          >
            Generate Task
          </CompoundButton>
        ) : null}

        {Appointment.visible ? (
          <CompoundButton
            onClick={this.props.onAppointment}
            appearance={Appointment.appearance}
            shape={Appointment.shape}
            style={{ margin: '10px' }}
            icon={<PeopleCommunityRegular />}
            secondaryContent="for this record"
            {...this.props}
          >
            Schedule Appointment
          </CompoundButton>
        ) : null}

        {Letter.visible ? (
          <CompoundButton
            onClick={this.props.onLetter}
            appearance={Letter.appearance}
            shape={Letter.shape}
            style={{ margin: '10px' }}
            icon={<MailAlertRegular />}
            secondaryContent="to this record"
            {...this.props}
          >
            Write a letter
          </CompoundButton>
        ) : null}

        {Fax.visible ? (
          <CompoundButton
            onClick={this.props.onFax}
            appearance={Fax.appearance}
            shape={Fax.shape}
            style={{ margin: '10px' }}
            icon={<FaxRegular />}
            secondaryContent="to this record"
            {...this.props}
          >
            Send a Fax
          </CompoundButton>
        ) : null}
      </FluentProvider>
    )
  }
}

function CompoundButtonPropertiesBuilder(appearance: string, ButtonShape: string, Visible: boolean) {

  // Appearance
  const Appearance = appearance;
  let AppearanceStyle: ButtonProps['appearance'];

  if (Appearance == "0") {
    AppearanceStyle = 'subtle' as ButtonProps['appearance'];
  } else if (Appearance == "1") {
    AppearanceStyle = "primary" as ButtonProps['appearance'];
  } else {
    AppearanceStyle = "outline" as ButtonProps['appearance']
  }
  // Visible
  const isVisible = Visible;

  // Button Style
  const shapeMapping: Record<string, ButtonProps['shape']> = {
    "0": "rounded",
    "1": "circular",
    "default": "square",
  };

  const buttonShape = shapeMapping[ButtonShape] ?? shapeMapping.default;

  const ButtonObject = {
    appearance: AppearanceStyle,
    visible: isVisible,
    shape: buttonShape
  }

  return ButtonObject
}