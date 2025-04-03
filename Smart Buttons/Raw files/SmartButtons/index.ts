import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { SmartButton, SmartButtonProps } from "./SmartButton";
import * as React from "react";

export class SmartButtons implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private _currentEntityId: string;
    private _currentEntityName: string;
    private _context: ComponentFramework.Context<IInputs>;
    private _primaryName: string;
    private _record: ComponentFramework.LookupValue;
    private _quickCreateEmail: boolean;
    private _quickCreatePhoneCall: boolean;
    private _quickCreateTask: boolean;
    private _quickCreateAppointment: boolean;
    private _quickCreateLetter: boolean;
    private _quickCreateFax: boolean;
    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        const _ppUri = new URL(window.location.toString());
        this._currentEntityId = _ppUri.searchParams.get("id") ?? "";
        this._currentEntityName = _ppUri.searchParams.get("etn") ?? "";
        this._context = context;

        this._quickCreateAppointment = context.parameters.UseQuickCreateForAppointment.raw.valueOf() ?? false;
        this._quickCreateEmail = context.parameters.UseQuickCreateForEmail.raw.valueOf() ?? false;
        this._quickCreatePhoneCall = context.parameters.UseQuickCreateForPhoneCall.raw.valueOf() ?? false;
        this._quickCreateTask = context.parameters.UseQuickCreateForTask.raw.valueOf() ?? false;
        this._quickCreateLetter = context.parameters.UseQuickCreateForLetter.raw.valueOf() ?? false;
        this._quickCreateFax = context.parameters.UseQuickCreateForFax.raw.valueOf() ?? false;
        
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        this._primaryName = context.parameters.PrimaryName.raw ?? "No Name";
        this._record = {
            id: this._currentEntityId,
            entityType: this._currentEntityName,
            name: this._primaryName,
        }
        const props: SmartButtonProps = { 
            _context: context,
            onTask: this.handleTask.bind(this),
            onEmail: this.handleEmail.bind(this),
            onAppointment: this.handleAppointment.bind(this),
            onPhoneCall: this.handlePhoneCall.bind(this),
            onLetter: this.handleLetter.bind(this),
            onFax: this.handleFax.bind(this)
        };
        return React.createElement(
            SmartButton, props
        );
    }

    public handleTask(): void {
        const parameters = {}
        this.handleActivity("task", parameters, this._quickCreateTask);
    }

    public handleEmail(): void {

        const parameters = {}

        this.handleActivity("email", parameters, this._quickCreateEmail);
    }

    public handleAppointment(): void {
        const parameters = {}
        this.handleActivity("appointment", parameters, this._quickCreateAppointment);
    }

    public handlePhoneCall(): void {
        const parameters = {}
        this.handleActivity("phonecall", parameters, this._quickCreatePhoneCall);
    }

    public handleLetter(): void {
        const parameters = {}
        this.handleActivity("letter", parameters, this._quickCreateLetter);
    }

    public handleFax(): void {
        const parameters = {}
        this.handleActivity("fax", parameters, this._quickCreateFax);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public handleActivity(entity:string, parameters: Record<string, any> | undefined, quickCreateUsage:boolean): void {
        const record = this._record;

        const pageInput: ComponentFramework.NavigationApi.EntityFormOptions = {
            createFromEntity: record,
            entityName: entity,
            useQuickCreateForm: quickCreateUsage,
        };
        this._context.navigation.openForm(pageInput, parameters ).then(
            function success() {
                    // Run code on success
                    return;
            },
            function error() {
                    // Handle errors
            }
        ).catch(function (error) {
            console.log(error);
        })
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return { };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
