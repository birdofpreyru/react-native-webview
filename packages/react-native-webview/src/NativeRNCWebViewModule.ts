import {
  type CodegenTypes,
  type TurboModule,
  TurboModuleRegistry,
} from 'react-native';

export interface Spec extends TurboModule {
  shouldStartLoadWithLockIdentifier(
    shouldStart: boolean,
    lockIdentifier: CodegenTypes.Double,
  ): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNCWebViewModule');
