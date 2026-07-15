from app.models.audit_log import AuditLog

def log_action(db, user_id, action, entity_type, entity_id):
    entry = AuditLog(user_id=user_id, action=action, entity_type=entity_type, entity_id=entity_id)
    db.add(entry)
    db.commit()
