ALTER TABLE sirade.srd_jci_encuestas_preg DROP FOREIGN KEY SRD_JCI_ENCUESTAS_PREG_FK_5;
ALTER TABLE sirade.srd_jci_encuestas_preg ADD CONSTRAINT srd_jci_encuestas_preg_srd_jci_preguntas_FK FOREIGN KEY (NJPRE_ID) REFERENCES sirade.srd_jci_preguntas(NJPRE_ID) ON UPDATE CASCADE;
ALTER TABLE sirade.srd_jci_encuestas_preg DROP FOREIGN KEY SRD_JCI_ENCUESTAS_PREG_FK_3;
ALTER TABLE sirade.srd_jci_encuestas_preg DROP FOREIGN KEY SRD_JCI_ENCUESTAS_PREG_FK_4;

